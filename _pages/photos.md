---
layout: page
title: Photos
permalink: /photos/
description: Simple snaps of places, moods, and everyday moments.
nav: true
nav_order: 7
---

<div class="photos-intro">
  <p>Photography started as a hobby and grew into a way to see things differently. Every shot tells a story of a place, a mood, or a moment.</p>
  <p>Mostly shot with a smartphone and occasionally a DSLR — the best camera is the one you have with you. Post-processing is kept minimal to preserve the authentic feel of each capture.</p>
</div>

<div class="photo-grid">
  {% for photo in site.data.photos %}
  <figure class="photo-item">
    <img
      src="{{ '/assets/img/photos/' | append: photo.file | append: '-thumb.jpg' | relative_url }}"
      data-zoom-src="{{ '/assets/img/photos/' | append: photo.file | append: '.jpg' | relative_url }}"
      alt="{{ photo.alt }}"
      loading="lazy"
      width="600"
      height="600"
      data-zoomable
    >
  </figure>
  {% endfor %}
</div>

{% if site.data.socials.instagram_id %}

<div class="text-center mt-4 mb-5">
  <a href="https://instagram.com/{{ site.data.socials.instagram_id }}" target="_blank" rel="noopener" class="btn btn-theme">
    <i class="fa-brands fa-instagram me-2"></i> More on Instagram
  </a>
</div>
{% endif %}
