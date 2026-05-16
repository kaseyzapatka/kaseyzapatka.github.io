---
layout: page
title: NYC Voter Turnout Analysis
description: Applying Bayesian surname geocoding, multilevel regression with poststratification, and LLMs to study ethno-racial voter turnout patterns across 4.6 million NYC voter registration records.
img: assets/img/nyc_voting_racial_distribution.png
importance: 3
category: research
related_publications: false
---

## NYC Voter Turnout Analysis
**Institution:** [CUNY Center for Urban Research](https://www.gc.cuny.edu/centers/center-urban-research) &nbsp;|&nbsp; **Jul 2025–Present**

---

### The Research Problem

Who votes in New York City — and how does that vary by race, ethnicity, and education? This question is central to understanding political representation and inequality in one of the most diverse cities in the world. But answering it rigorously is hard: voter registration files record names and addresses, not race or educational attainment. Without those demographic variables, we cannot directly measure turnout disparities.

This project builds a methodology for recovering those demographics at scale and using them to study ethno-racial and educational patterns in NYC voter behavior.

---

### Data

The foundation is a FOIL'd New York State voter registration file — the full population of 4.6 million registered NYC voters — acquired directly from the state. This is linked with:

- **US Census Bureau** surname frequency tables and tract-level demographic data
- **NYC administrative data** for geographic and demographic enrichment
- A **survey sample** drawn from the voter file, used to estimate educational attainment via multilevel regression

---

### Methods

**Race/ethnicity imputation via Bayesian Improved Surname Geocoding (BISG)**

Standard voter files lack racial identifiers. To recover race/ethnicity, the project uses the `birdie` R package's `bisg_me` function, which implements a fully Bayesian version of BISG that corrects for Census sampling bias and is more robust than alternatives like `wru`. Surnames are matched to 2010 Census surname frequency tables, combined with tract-level Census demographics, to produce posterior probability distributions over five racial/ethnic categories for each of the 4.6 million records.

**Educational attainment imputation via multilevel regression and poststratification (MrP)**

Voter files also lack education data. Educational attainment is imputed from the survey sample using a Bayesian multilevel model (via `rstanarm` or `brms`) with partial pooling across geographic units. Poststratification weights are then constructed to align the survey sample with the full voter file population, enabling valid population-level inference.

**Machine learning for turnout patterns**

With race/ethnicity and education recovered for the full file, machine learning models are applied to uncover patterns in historical ethno-racial and educational voter turnout across election cycles.

**Retrieval-augmented generation (RAG) for data querying**

The 4.6 million record voter file is large enough to make ad hoc analysis cumbersome. RAG techniques are applied to enable natural-language querying of the dataset — allowing researchers to extract insights without writing custom queries for every question.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nyc_voting_racial_distribution.png" title="Racial distribution of NYC registered voters" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nyc_voting_education.png" title="College education distribution by group" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Imputed racial/ethnic distribution of NYC registered voters from Bayesian BISG applied to 4.6 million records. Right: College education distribution across demographic groups, derived from multilevel regression and poststratification.
</div>

---

### Skills & Methods

`R` &nbsp;`birdie` &nbsp;`BISG` &nbsp;`Bayesian inference` &nbsp;`MrP` &nbsp;`rstanarm` &nbsp;`brms` &nbsp;`Machine learning` &nbsp;`RAG` &nbsp;`LLMs` &nbsp;`NYC administrative data` &nbsp;`US Census`
