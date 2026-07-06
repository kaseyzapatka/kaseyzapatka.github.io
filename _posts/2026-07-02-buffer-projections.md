---
layout: post
title: Your buffer is lying to you
date: 2026-07-02
description: Why projection choice shrank my study area by 20%
tags: python spatial geopandas projections
categories: tutorials
giscus_comments: false
featured: true
related_posts: false
---

---

## The Problem

While building my [Diridon Station housing capacity analysis](https://www.kaseyzapatka.com/sanjose_transit_equity), I needed something that seems trivial: every parcel within one mile of the station. One point, one buffer, one spatial join. It's the kind of operation you write in three lines and never think about again.

Except the first version of my buffer was wrong — and it was wrong *silently*. No error, no warning, a perfectly reasonable-looking map. The circle was just 20% too small. In a parcel-level analysis, that meant **2,017 parcels — 38% of my study area — quietly vanished**, taking roughly 31,600 homes of zoned capacity with them.

The culprit was the projection. If you do spatial analysis in Python, you've probably made this exact mistake, because the projection that causes it is the one every web map hands you by default: Web Mercator.

## Distance only exists in a projection

A coordinate reference system (CRS) answers the question "what do these numbers mean?" Geographic systems like WGS 84 (EPSG:4326) store longitude and latitude in degrees. Projected systems flatten the globe onto a plane so coordinates become linear units — meters or feet — that you can do geometry with.

The catch is that *every* projection distorts something, and each one chooses what to sacrifice. Web Mercator (EPSG:3857) — the projection behind Google Maps, OpenStreetMap tiles, and nearly every web map — preserves *shape and direction*, not *distance*. Away from the equator, its coordinate grid stretches by a factor of roughly $$1/\cos(\text{latitude})$$.

San José sits at about 37.3° N, where $$1/\cos(37.3°) \approx 1.26$$. So in Web Mercator, coordinates around Diridon Station are inflated by about 26%: what the coordinates *call* 1,609 meters is only about 1,280 meters — 0.79 miles — of actual ground.

Here's the naive version. It runs without complaint:

```python
import geopandas as gpd
from shapely.geometry import Point

diridon = gpd.GeoSeries([Point(-121.9036, 37.3292)], crs=4326)

# looks reasonable, silently wrong at this latitude
buffer = diridon.to_crs(3857).buffer(1609.344)   # "1 mile" in Web Mercator
```

And the correct version — identical except for one number:

```python
# CA State Plane Zone 3 (EPSG:2227), units are US survey feet
buffer = diridon.to_crs(2227).buffer(5280)       # 1 mile, actually
```

State Plane zones are designed for exactly this: locally accurate distances over a small region. Within a zone, distance error is on the order of 1 part in 10,000 — irrelevant for a study-area buffer.

## What the mistake costs

Overlaying the two buffers on San José's parcel fabric makes the damage visible. The dashed circle is a true mile in State Plane; the solid circle is the "mile" Web Mercator gave me. Every coral parcel falls between them:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog_buffer_mercator.png" title="The same 1-mile buffer in two projections" class="img-fluid rounded z-depth-1" %}
</div>
</div>
<div class="caption">
    The same "1-mile" buffer around Diridon Station in two projections. The Web Mercator circle is ~0.79 miles in radius on the ground — 37% less area — and drops 2,017 parcels from the study area.
</div>

For my Diridon analysis, the difference was not cosmetic:

| | True mile (EPSG:2227) | "Mile" in Web Mercator | Silently lost |
| --- | --- | --- | --- |
| Effective radius | 1.00 mi | 0.79 mi | 21% |
| Buffer area | 3.14 mi² | 1.98 mi² | 37% |
| Parcels captured | 5,279 | 3,262 | 2,017 (38%) |
| Zoned housing capacity | ~119,700 homes | ~88,100 homes | ~31,600 (26%) |

A projection choice — one argument to `to_crs()` — moved my headline number by a quarter. And because the buffer *looks* like a circle either way, nothing in the output hints that anything is off.

## The other classic: buffering in degrees

The mistake's uglier cousin is buffering while still in EPSG:4326, where units are degrees. `buffer(1)` gives you a 1-*degree* circle — about 69 miles north–south. Recent versions of GeoPandas at least warn you (`UserWarning: Geometry is in a geographic CRS. Results from 'buffer' are likely incorrect`), but the operation still runs, and degrees have their own distortion: at 37° N, a degree of longitude is only ~55 miles while a degree of latitude is ~69, so a degree-based buffer isn't even a circle on the ground — it's an ellipse.

Web Mercator is more insidious precisely because it *doesn't* warn. The units are meters, the geometry is projected, and GeoPandas has no way to know you intended those meters to survive contact with the ground.

## How to pick the right CRS

My rule of thumb, in order of preference:

1. **Local official projection.** For US work, the State Plane zone for your study area (EPSG:2227 for the South Bay). Agencies publish their data in it for a reason — distances and areas are locally accurate.
2. **The right UTM zone.** Nearly as good anywhere on Earth, and GeoPandas will find it for you: `gdf.estimate_utm_crs()`.
3. **Web Mercator for tiles only.** Reproject to 3857 at the *very last step*, when you're rendering on a basemap. Never measure in it.

And one habit that catches the whole class of bug: **sanity-check a known distance**. After buffering, check that the radius is what you claimed:

```python
import numpy as np

buffer = diridon.to_crs(2227).buffer(5280)
radius_mi = np.sqrt(buffer.area.iloc[0] / np.pi) / 5280
assert abs(radius_mi - 1.0) < 0.01, f"buffer radius is {radius_mi:.2f} mi, not 1"
```

A check like this is how I caught the Mercator version at all — comparing parcel counts against a distance I could verify by hand. Cheap assertions like this are the spatial equivalent of unit tests — your buffer can lie to you, but it can't lie to a tape measure.

## Takeaway

- Web Mercator preserves shape, not distance; at San José's latitude, its "meters" are ~26% short on the ground
- Buffer in a locally accurate projected CRS — State Plane or UTM (`estimate_utm_crs()`) — never in 3857 or 4326
- Reproject to Web Mercator only for display, as the final step
- Assert a known distance after buffering; it costs one line and catches the entire bug class
