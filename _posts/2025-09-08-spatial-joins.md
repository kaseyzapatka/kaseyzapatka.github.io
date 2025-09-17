---
layout: post
title: spatial joins
date: 2025-09-08 08:57:00-0400
description: Spatial join tutorial in Python
tags: python jupyter spatial
categories: tutorials
giscus_comments: true
related_posts: false
---

Spatial joins are the backbone of data management in spatial analysis. A **_spatial join_** is a GIS operation that combines two datasets based on their geographic relationships rather than attribute values. Instead of matching rows by a common ID like in a typical database join, spatial joins link features based on location—such as points within polygons, nearest neighbors, or overlapping areas. This allows you to join one dataset with attributes from another based on their spatial relationship, which is essential for tasks like aggregating census data by neighborhoods or linking crime incidents to police precincts. 

In this tutorial, I will spatially join two polygons-one for census tracts and one for places-to illustrate how the spatial join. While spatial joins can handle joining polygons and points, joining polygons to polygons presents a unique challenge because it is likely that the the polygons for one layer do not perfectly overlap with another. So, we have to have a technique to determine what to include. Here, we'll join all San Francisco census tracts whose centroids (the geometric center of the polygon shape) fall within the San Francisco place polygon.

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/spatial_joins.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/spatial_joins.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
