---
layout: about
title: Home
permalink: /
subtitle:

profile:
  align: false
  image:
  image_circular: false
  more_info:

selected_papers: false
social: true

announcements:
  enabled: false

latest_posts:
  enabled: true
  scrollable: true
  limit: 3
---

<div class="hero-section">
  <div class="hero-left">
    <p class="hero-subtitle">Infrastructure Engineer · Tech Speaker</p>
    <p class="hero-intro">Hi, I'm Ni Putu Sintia Wati — an Infrastructure Engineer with 3+ years of experience in cloud infrastructure, automation, and observability.</p>
    <p class="hero-description">I focus on building scalable systems, optimizing developer workflows, and ensuring reliability through Infrastructure as Code, monitoring, and CI/CD.</p>
    <p class="hero-description">I also love sharing what I learn. I've spoken at events like PyCon ID, AWS Community Day, openSUSE.Asia Summit, and DevFest — you can find my slides on the <a href="/talks/">Talks</a> page.</p>
    <p class="hero-description">Beyond work, I enjoy improving old projects, reading, writing blogs based on my experiences, and capturing everyday moments through simple <a href="/photos/">photography</a>.</p>
  </div>
  <div class="hero-right">
    <img src="/assets/img/profile.jpg" alt="Ni Putu Sintia Wati" class="hero-image" width="600" height="697">
    <p class="hero-location">Bali, Indonesia</p>
  </div>
</div>

<div class="home-stats">
  <a href="{{ '/cv/' | relative_url }}"><span class="home-stat-number">3+</span> years</a>
  <a href="{{ '/talks/' | relative_url }}"><span class="home-stat-number">{{ site.data.talks.size }}</span> talks</a>
  <a href="{{ '/blog/' | relative_url }}"><span class="home-stat-number">{{ site.posts.size }}</span> articles</a>
</div>

<h2 class="home-section-title">Timeline</h2>
<ol class="home-timeline">
  {% for item in site.data.timeline %}
  <li><span class="home-timeline-year">{{ item.year }}</span><span>{{ item.text }}</span></li>
  {% endfor %}
</ol>

<style>
.hero-section {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
}

.hero-left {
  flex: 1;
}

.hero-subtitle {
  font-size: 1rem;
  color: var(--global-text-color-light);
  margin-bottom: 1rem;
}

.hero-intro {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--global-text-color);
  margin-bottom: 0.75rem;
}

.hero-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--global-text-color);
  margin-bottom: 0.75rem;
}

.hero-right {
  flex-shrink: 0;
  text-align: center;
}

.hero-image {
  width: 280px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.hero-location {
  margin-top: 0.5rem;
  font-family: monospace;
  font-size: 0.9rem;
  color: var(--global-text-color-light);
}

@media (max-width: 768px) {
  .hero-section {
    flex-direction: column-reverse;
    align-items: stretch;
  }

  .hero-right {
    align-self: center;
  }

  .hero-image {
    width: 200px;
  }
}
</style>
