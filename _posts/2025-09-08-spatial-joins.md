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



Let's break it down: this is possible thanks to [Jekyll Jupyter Notebook plugin](https://github.com/red-data-tools/jekyll-jupyter-notebook) that allows you to embed jupyter notebooks in your posts. It basically calls [`jupyter nbconvert --to html`](https://nbconvert.readthedocs.io/en/latest/usage.html#convert-html) to convert the notebook to an html page and then includes it in the post. Since [Kramdown](https://jekyllrb.com/docs/configuration/markdown/) is the default Markdown renderer for Jekyll, we need to surround the call to the plugin with the [::nomarkdown](https://kramdown.gettalong.org/syntax.html#extensions) tag so that it stops processing this part with Kramdown and outputs the content as-is.

The plugin takes as input the path to the notebook, but it assumes the file exists. If you want to check if the file exists before calling the plugin, you can use the `file_exists` filter. This avoids getting a 404 error from the plugin and ending up displaying the main page inside of it instead. If the file does not exist, you can output a message to the user. The code displayed above outputs the following:

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/spatial_joins.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/spatial_joins.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

Note that the jupyter notebook supports both light and dark themes.
