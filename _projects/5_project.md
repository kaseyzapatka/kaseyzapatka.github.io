---
layout: page
title: San Jose Transit Equity
description: Spatial analysis of zoning, parcel capacity, and public transit access around Diridon Station to assess transportation equity in downtown San Jose.
img: assets/img/sanjose_equity_map.png
importance: 2
category: research
related_publications: false
---

## San Jose Transit Equity Analysis
**Aug 2025–Feb 2026**

---

### The Research Problem

As Diridon Station in downtown San Jose prepares to become one of the most significant transit hubs in California — serving high-speed rail, Caltrain, VTA light rail, and BART — a central question arises: does the zoning and land use around the station enable equitable, transit-oriented development? This project uses spatial analysis to map the relationship between transit access, zoning class, and residential capacity in the area, surfacing inequities in how land is regulated relative to where transit investment is concentrated.

---

### Data & Methods

All spatial data were sourced from the City of San Jose open data portal:

- **Parcel shapefiles** — parcel-level geometries and land use attributes across the city
- **Zoning shapefiles** — official zoning district boundaries with classifications
- **San Jose municipal zoning code** — used to interpret zoning categories and permitted uses

The analysis was conducted in Python using `geopandas` for spatial joins and `shapely` for geometry operations. Key steps:

- **Defined a study area** around Diridon Station using a buffer analysis to capture the transit shed
- **Classified zoning** into residential, commercial, mixed-use, and industrial categories using the municipal code
- **Computed dwelling capacity** per parcel based on permitted density by zoning class
- **Overlaid public transit routes** to assess which parcels have high transit access but restrictive zoning
- **Built an interactive map** of the Diridon area combining zoning, transit, and parcel layers

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sanjose_equity_map.png" title="Transit equity map" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sanjose_zoning.png" title="Zoning classes around Diridon" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Final equity map overlaying transit access and zoning restrictions around Diridon Station. Right: Zoning class distribution across the study area.
</div>

---

- [GitHub Repository](https://github.com/kaseyzapatka/sanjose_transit_equity)

---

### Skills & Methods

`Python` &nbsp;`geopandas` &nbsp;`shapely` &nbsp;`spatial joins` &nbsp;`buffer analysis` &nbsp;`transit-oriented development` &nbsp;`zoning analysis` &nbsp;`interactive mapping`
