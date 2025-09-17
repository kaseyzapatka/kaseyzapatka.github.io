---
layout: page
permalink: /repositories/
title: github
description: a sampling of my public repos on github
nav: true
nav_order: 4
---

{% if site.data.repositories.github_repos %}


<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
