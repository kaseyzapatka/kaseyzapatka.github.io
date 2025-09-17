---
layout: post
title: spatial joins
date: 2025-09-08 08:57:00-0400
description: Spatial join tutorial in R and Python
tags: formatting jupyter
categories: sample-posts
giscus_comments: true
related_posts: false
---

Spatial joins are the backbone of data management in spatial analysis. A **_spatial join_** is a GIS operation that combines two datasets based on their geographic relationships rather than attribute values. Instead of matching rows by a common ID like in a typical database join, spatial joins link features based on location—such as points within polygons, nearest neighbors, or overlapping areas. This allows you to join one dataset with attributes from another based on their spatial relationship, which is essential for tasks like aggregating census data by neighborhoods or linking crime incidents to police precincts. 

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/spatial_joins.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/spatial_joins.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
