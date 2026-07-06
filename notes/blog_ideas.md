# Blog post ideas — Diridon / San Jose Transit Equity project

Ideas developed July 2026, based on the [Diridon housing capacity & equity project](https://www.kaseyzapatka.com/sanjose_transit_equity).
Suggested arc for the policy series: 5 → 6 → 7, with 1 and 2 as technical companions linking back to the memo.

## Technical tutorials (matches current blog voice)

1. **"Your buffer is lying to you: why projection choice shrank my study area by 20%"**
   Web Mercator inflates distances ~26% at San José's latitude, silently turning a
   1-mile buffer into ~0.8 miles on the ground. Before/after map in `geopandas`
   comparing EPSG:4326/3857 vs. State Plane (EPSG:2227). Most shareable idea —
   a mistake nearly everyone doing spatial work has made; follows the spatial-joins
   tutorial naturally. **[DRAFTED — see _posts/]**

2. **"Finding parking lots from space (sort of): OpenStreetMap building footprints as a soft-site detector"**
   Tutorial on the footprint-coverage method: pull OSM footprints, compute lot
   coverage per parcel, threshold at 15%, and run the 5–25% sensitivity analysis
   that keeps an open-data proxy honest. Reusable for housing-element and TOD work.

3. **"Fail fast, write atomically: making a research pipeline that can't silently corrupt itself"**
   Computational-social-science practices post drawn from `pipeline_utils.py`
   (fail-fast checks, atomic writes, one-command smoke test). Little is written
   about software-engineering hygiene for academic pipelines; resonates with CSS teaching.

4. **"From analysis to memo: one Quarto project, a website and a Typst PDF"**
   How a single `quarto render` produces the illustrated site and a polished PDF
   memo with no LaTeX. Fits the public-scholarship identity and the tooling posts
   (same audience as the Positron post).

## Substantive / policy pieces (leverages research credibility)

5. **"San José's biggest housing opportunity is a parking lot"**
   The flagship finding as a public-facing essay: ~38% of Downtown's zoned land is
   underbuilt, and soft sites alone hold 20,600–42,500 homes next to the Bay Area's
   largest transit investment. Accessible, opinionated, anchored by the hero map.

6. **"Zoned for 120,000, planned for 34,000: the ambition gap in transit-oriented development"**
   Upzoning fights get the attention, but at Diridon the entitlement ceiling already
   exists — the binding constraint is the City's own growth targets. Generalizes
   beyond San José; could travel well in housing-policy circles.

7. **"Can you add 40,000 homes without displacing anyone?"**
   Connects the equity overlay (69% renters, 2× transit-dependent, 22% of soft-site
   capacity in higher-vulnerability tracts) to the published work on rent stabilization
   (City & Community 2022) and the gentrification sequence (Urban Studies 2021).
   The post only I can write — ties the new analysis to the supply-plus-protections argument.
