---
layout: page
title: NEPA Clean Energy Review Analysis
description: Built a Python BERT+LLM pipeline for the Clean Air Task Force to extract and classify 120,000+ federal environmental review documents, enabling evidence-based permitting reform recommendations.
img: assets/img/nepa_projects_by_year.png
importance: 1
category: consulting
related_publications: false
---

## [NEPA Clean Energy Environmental Review Analysis](https://www.kaseyzapatka.com/nepa/phase1/reports/project_overview.html)
**Client:** [Clean Air Task Force](https://www.catf.us/) &nbsp;|&nbsp; **Jan 2026–Present**

---

### The Research Problem

Federal clean energy projects — wind, solar, transmission — must complete environmental reviews under the National Environmental Policy Act (NEPA) before breaking ground. These reviews can take years and run to thousands of pages, creating a significant bottleneck for the clean energy transition. But because NEPA documents are unstructured text scattered across federal agencies, no one had systematically measured *how long* reviews actually take, *which agencies* are the slowest, or *which project types* face the steepest delays.

The [Clean Air Task Force](https://www.catf.us/) — a leading clean energy policy nonprofit — needed that evidence base to make credible, agency-specific permitting reform recommendations to policymakers and funders.

---

### Client Work: From Research Questions to Deliverables

Working directly with CATF researchers, I led the full arc of the project:

- **Scoped the research questions** collaboratively with CATF, translating high-level policy goals ("what's slowing clean energy permitting?") into measurable, answerable questions about review timelines, agency behavior, and project characteristics
- **Identified and acquired the data**, integrating the PNNL NEPATEC 2.0 corpus (120,000+ NEPA documents) with Federal Register API data and targeted web scraping to build a comprehensive project-level dataset
- **Delivered phased findings** across six structured deliverables, each mapped to a specific CATF research priority — from baseline timeline benchmarks to multi-agency coordination patterns
- **Communicated results to non-technical stakeholders**, presenting findings and strategic recommendations in stakeholder presentations and a public-facing analytics site
- **Built reusable infrastructure** so CATF can extend the analysis independently as new documents are added

---

### NLP & Machine Learning Pipeline

The core technical challenge was turning raw, inconsistently formatted text documents into structured data at scale.

- **Data ingestion** — loaded the PNNL NEPATEC 2.0 corpus and supplemented it with Federal Register API data and targeted web scraping, preprocessing everything into per-source parquet files for efficient querying
- **Project classification** — applied regex and ML classifiers to categorize 20,000+ projects by technology type (solar, wind, transmission, storage), review process (CE, EA, EIS), and installed capacity
- **BERT extraction** — trained BERT classifiers to pull review start/end dates, categorize review type, and flag timeline milestones from free-form document text
- **LLM adjudication** — for extractions where BERT confidence was low, a second-pass LLM layer resolved ambiguity by combining model outputs with rule-based post-processing
- **Analysis and reporting** — structured parquet outputs feed into per-deliverable R scripts that produce figures and tables; Quarto renders everything into HTML reports published to the project website

The full pipeline is reproducible end-to-end and built on DuckDB (Phase 2) for scalable, query-efficient processing of the full corpus.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nepa_projects_by_year.png" title="Clean energy NEPA projects by year" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nepa_energy_type.png" title="Projects by energy type" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Clean energy NEPA review filings by year, extracted from 120,000+ documents. Right: Distribution of projects by technology type, classified using ML and regex pipelines.
</div>

---

### Public Deliverables

Findings are published in two public-facing tools designed to give policymakers, funders, and advocates direct access to the analyses and underlying documents:

- **[Project Website](https://www.kaseyzapatka.com/nepa/phase1/reports/project_overview.html)** — interactive HTML reports with figures, tables, and narrative summaries of each deliverable
- **[HuggingFace Document Browser](https://huggingface.co/spaces/kaseyzapatka/nepa-document-explorer)** — a Streamlit app for exploring individual NEPA documents, source classifications, and extracted metadata

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nepa_agency_sankey.png" title="Agency coordination flows" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Agency coordination patterns in multi-agency NEPA reviews, visualized as a Sankey diagram in the public analytics site.
</div>

---

### Skills & Methods

`Python` &nbsp;`BERT` &nbsp;`LLMs` &nbsp;`NLP` &nbsp;`DuckDB` &nbsp;`R` &nbsp;`Quarto` &nbsp;`Streamlit` &nbsp;`Federal Register API` &nbsp;`Web scraping` &nbsp;`Regex` &nbsp;`Machine learning` &nbsp;`Data visualization`
