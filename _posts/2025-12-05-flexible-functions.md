---
layout: post
title: Flexible Functions 
date: 2025-12-05
description: My Flexible Plotting Approach in R using ggplot2
tags: R functions ggplot2
categories: tutorials
giscus_comments: false
featured: true
related_posts: false
---

--- 

## The Problem

I've been working with `ggplot2` for a while now and it's hands down my favorite approach to data visualization—the grammar of graphics is both flexible and intuitive.[^1] But I kept running into the same problem: repetitive code.
 
For exploratory analysis, typing out `ggplot(data = ...) + geom_...() + aes(...)` is fine for producing quick visualizations. But since I usually work on a team and frequently share plots, I generally clean them up—adding `theme()`, `labs()`, `scales()`, and more. Not every figure needs the same specifications, so pretty soon I have a wall of code for a one-off plot that might never be seen again.

The problem got worse as I began doing more reports and presentations. I wanted consistent styling across all figures—same fonts, axis styling, legend positioning. But maintaining uniformity meant either copying and pasting massive chunks of theme code or constantly hunting down a "master plot" somewhere on GitHub to remember my settings. Both approaches were inefficient and error-prone. I'd inevitably forget to update one plot, and suddenly my report looked inconsistent.

However, I noticed something interesting: most of my plots followed the same basic structure and used the same handful of parameters. Specify a dataset, choose a geometry, map variables to aesthetics, add labels (this is usually needed when I share plots), apply a theme. The details changed, but the pattern and the functions I was using were consistently the same.

As Hadley Wickham says in [R for Data Science](https://r4ds.hadley.nz/functions.html):

> "A good rule of thumb is to consider writing a function whenever you've copied and pasted a block of code more than twice (i.e. you now have three copies of the same code)."

So I took his advice and built a flexible wrapper function that captures my common plotting structure while giving me the flexibility to create different types of figures or make quick adjustments without much code. For publication-quality figures, I still write from scratch or even just build on top of this wrapper. But I find myself using this function extensively in my day-to-day work, and I wanted to share it!


## The Solution: A Wrapper Function

So I built `flex_plot()`, a wrapper function that handles the repetitive parts of my ggplot workflow while preserving access to ggplot's full capabilities when I need them. It's meant to streamline the most common operations I do while making plots while also making it consistent and maintainable. You could easily adapt it to your own plotting needs.

The function has been a game-changer for my workflow. I just load the function and can make quick exploratory plots with just specifying a few parameters. I made sure to set most function parameters to `NULL` so that I only need to specify the ones I need. With just a few lines of code, I can consistently pass my figure settings to an array of different plots. Since the function returns a standard ggplot object, I can easily add custom layers or make unusual modifications.


Let's take a look:

<br>

<!-- Auto-resizing iframe for the rendered notebook -->
<iframe id="notebook-iframe"
        src="{{ '/assets/jupyter/flex_plot.html' | relative_url }}"
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


### Download the Quarto Document

If you want to run the code locally, you can download the source file: [📥 Download Quarto script](https://github.com/kaseyzapatka/kaseyzapatka.github.io/tree/main/assets/jupyter/flex_plot.qmd). Feel free to adapt this function to your own needs—I'd love to hear how you improve upon it!

<br>

### Footnotes 

--- 

[^1]: I love `matplotlib` and `seaborn` in Python and think in some ways they are easier to use out of the box, but I think it's more intuitive to add things in `ggplot2` and ultimately, I think it's a bit more flexible.

