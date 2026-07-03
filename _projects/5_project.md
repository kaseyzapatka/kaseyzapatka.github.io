---
layout: page
title: San Jose Transit Equity
description: Parcel-level analysis of housing capacity and displacement risk within one mile of Diridon Station — San Jose's zoning permits ~120,000 homes where only ~12,800 exist today, with ~20,600–42,500 buildable on parking lots and vacant land alone.
img: assets/img/sanjose_diridon_thumb.png
importance: 2
category: research
related_publications: false
---

## [Housing Capacity & Equity Around Diridon Station](https://www.kaseyzapatka.com/sanjose_transit_equity)
**Nov 2025–Jul 2026**

---

### The Research Problem

Diridon Station is the Bay Area's flagship transit-oriented development site — the future convergence of BART's Silicon Valley extension, California High-Speed Rail, Caltrain, and Google's "Downtown West." Two questions decide whether the region's hopes for the station area are realistic: does the zoning actually permit enough housing near the station, and who lives there now — would adding homes put them at risk? This project answers both at the parcel level, for every one of the ~5,300 parcels within a mile of the station.

---

### Data & Methods

All spatial data come from the City of San José open data portal (parcels, zoning districts, Equity Index tracts, Growth Areas 2040), combined with San José Municipal Code Title 20 densities, the Diridon Station Area Plan, ACS 2019–2023 estimates, and OpenStreetMap building footprints. The analysis was built as a reproducible Python pipeline (`geopandas`, `shapely`, `folium`) with fail-fast checks and atomic writes. Key steps:

- **Computed theoretical zoned capacity** per parcel as lot acreage × maximum dwelling units per acre, using real maximum densities from Title 20 and the Diridon Station Area Plan
- **Identified soft sites** — vacant lots and surface parking where buildings cover less than 15% of the parcel — using OpenStreetMap footprint coverage, with sensitivity tests at 5–25% thresholds
- **Benchmarked capacity against the City's own plans**, apportioning Growth Areas 2040 housing programs to the 1-mile ring
- **Overlaid ACS demographics and the City's Equity Index** to flag displacement vulnerability tract by tract
- **Published everything** as an illustrated Quarto website with an interactive Leaflet map and an auto-generated PDF memo (via Typst)

---

### Findings

- **Zoning permits ~120,000 homes** within a mile of the station — 3.5× what the City's plans call for (~34,300) and nearly 10× the ~12,800 homes that exist today. About 88% of that capacity sits in the Downtown core.
- **~38% of Downtown's zoned land is underbuilt**, much of it surface parking. Soft sites alone hold **~20,600–42,500 homes** of capacity — addable without displacing residents or demolishing viable buildings.
- **The station area is 69% renters**, roughly twice as transit-dependent as the city, and earns below the citywide median income — so the recommendation pairs upzoning with inclusionary requirements and tenant protections from the start.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sanjose_hero_map.png" title="Soft sites and displacement vulnerability around Diridon" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The story in one map: coral parcels are soft sites — underbuilt, high-capacity lots clustered around the station — atop neighborhoods shaded by displacement vulnerability.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sanjose_capacity_vs_plan.png" title="Zoned capacity vs. City plans" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sanjose_who_lives_here.png" title="Who lives in the station area" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: The City plans for less than a third of what its zoning already permits. Right: Station-area residents are more renter-occupied, more transit-dependent, and lower-income than San José overall.
</div>

---

- [Project Website & Memo](https://www.kaseyzapatka.com/sanjose_transit_equity)
- [GitHub Repository](https://github.com/kaseyzapatka/sanjose_transit_equity)

---

### Skills & Methods

`Python` &nbsp;`geopandas` &nbsp;`shapely` &nbsp;`folium` &nbsp;`spatial analysis` &nbsp;`zoning analysis` &nbsp;`Census API / ACS` &nbsp;`OpenStreetMap` &nbsp;`Quarto` &nbsp;`Typst` &nbsp;`interactive mapping` &nbsp;`transit-oriented development`
