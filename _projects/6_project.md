---
layout: page
title: SF Residential Inspection Risk
description: Built composite risk scores for San Francisco parcels using fire, violation, and inspection records, and deployed interactive Shiny dashboards for the SF Fire Department and Department of Building Inspection.
img: assets/img/inspections_fire_risk.png
importance: 4
category: research
related_publications: false
---

## San Francisco Residential Inspection Risk Analysis
**Jun 2025–Dec 2025**

---

### The Research Problem

San Francisco's Fire Department (SFFD) and Department of Building Inspection (DBI) each manage large portfolios of residential properties but have limited tools for prioritizing inspections proactively. Which parcels are most at risk? Where should inspectors focus limited resources? This project builds data-driven composite risk scores for every residential parcel in San Francisco — separately for fire risk and building inspection risk — and surfaces them through interactive dashboards built for each agency.

---

### Data & Methods

Data were pulled from San Francisco's open data systems and linked at the parcel level using APN identifiers:

- **Fire incidents** — SFFD records of residential fire calls, geocoded to parcels
- **Building violations** — DBI violation notices by address and parcel
- **Inspection records** — completed inspection histories from DBI
- **Parcel and tax data** — assessor records providing building characteristics (age, type, square footage)
- **Census tract demographics** — for neighborhood-level context

The analysis was built entirely in R using `sf` for spatial operations, `tidyverse` for data processing, `tidycensus` for Census data, and `gt` for formatted output tables.

**Risk score construction:**

For each agency, a composite risk score was constructed by combining multiple indicators — fire incident rate, violation density, inspection lag, and building age — into a standardized index. Scores were then clustered spatially using k-means clustering to identify neighborhood risk tiers, enabling both parcel-level and area-level prioritization.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/inspections_fire_risk.png" title="Fire risk score clusters" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/inspections_dbi_risk.png" title="DBI risk score clusters" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Spatial clusters of fire risk scores across SF residential parcels (SFFD). Right: Building inspection risk score clusters (DBI). Both maps show neighborhood-level risk tiers derived from composite scoring.
</div>

### Dashboards & Code

Findings were delivered as two interactive Shiny dashboards — one for each agency — allowing inspectors and planners to filter by neighborhood, risk tier, and building type, and to drill down to individual parcels.

- [SF Fire Department Risk Dashboard](https://kaseyzapatka.shinyapps.io/fire_risk_dashboard/)
- [SF Department of Building Inspection Dashboard](https://kaseyzapatka.shinyapps.io/dbi_risk_dashboard/)
- [GitHub Repository](https://github.com/kaseyzapatka/residential_inspections)

---

### Skills & Methods

`R` &nbsp;`sf` &nbsp;`tidyverse` &nbsp;`tidycensus` &nbsp;`Shiny` &nbsp;`k-means clustering` &nbsp;`spatial joins` &nbsp;`composite risk scoring` &nbsp;`parcel-level analysis` &nbsp;`data visualization`
