---
layout: post
title: spatial joins
date: 2025-09-08 08:57:00-0400
description: Spatial join tutorial in Python
tags: python jupyter spatial
categories: tutorials
giscus_comments: false
featured: true
related_posts: false
---

Spatial joins are the backbone of data management in spatial analysis. A [spatial join](https://geopandas.org/en/stable/gallery/spatial_joins.html) is a GIS operation that combines two datasets based on their geographic relationships rather than attribute values. Instead of matching rows by a common ID, as in a typical database join, spatial joins link features based on location—such as points within polygons, nearest neighbors, or overlapping areas. This allows you to join one dataset with attributes from another based on their spatial relationship, which is essential for tasks like aggregating census data by neighborhoods or linking crime incidents to police precincts.

In this tutorial, I will spatially join two polygons—one for census tracts and one for places—to illustrate how a spatial join can combine data from two different geographic layers. While spatial joins can handle joining polygons and points, joining polygons to polygons presents a unique challenge because the polygons in one layer often do not perfectly overlap with those in another. Therefore, we need a method to determine which features to include. Here, we'll join all San Francisco census tracts[^tracts] whose centroids (the geometric center of the polygon) fall within the San Francisco place[^places] polygon. This ensures that all census tracts within the Census-designated place of San Francisco are captured in our join.

<br>

<!-- Auto-resizing iframe for the rendered notebook -->
<iframe id="notebook-iframe"
        src="{{ '/assets/jupyter/spatial_joins.html' | relative_url }}"
        width="100%"
        style="border:none; overflow:hidden;">
</iframe>

<script>
  // Listen for messages from the iframe and adjust its height
  window.addEventListener("message", function(event) {
    if (event.data.type === "resize-iframe") {
      document.getElementById("notebook-iframe").style.height = event.data.height + "px";
    }
  });
</script>

<br>

### Footnotes 

--- 

[^tracts]: Census tracts are small geographies designed by the US Census to calculate demographic statistics and are designed to contain on average between 4,000 and 5,000 people. You can read more about them on the [US Census' website](https://www.census.gov/geographies/reference-maps/2020/geo/2020pl-maps/2020-census-tract.html).

[^places]: Places are another geographies designed by the US Census. More information can be found on the [US Census' website](https://www.census.gov/programs-surveys/bas/information/cdp.html).