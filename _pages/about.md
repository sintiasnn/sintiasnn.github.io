---
layout: about
title: home
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
    <p class="hero-subtitle">Infrastructure Engineer</p>
    <p class="hero-intro">Hi, I'm Ni Putu Sintia Wati — an Infrastructure Engineer with over a year of experience in cloud infrastructure, automation, and observability.</p>
    <p class="hero-description">I focus on building scalable systems, optimizing developer workflows, and ensuring reliability through Infrastructure as Code, monitoring, and CI/CD.</p>
    <p class="hero-description">Beyond work, I enjoy improving old projects, reading, writing blogs based on my experiences, and capturing everyday moments through simple photography.</p>
  </div>
  <div class="hero-right">
    <img src="/assets/img/DSCF3952.JPG" alt="Ni Putu Sintia Wati" class="hero-image">
    <p class="hero-location">Bali, Indonesia</p>
  </div>
</div>

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
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--global-text-color);
  margin-bottom: 1rem;
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
    text-align: center;
  }

  .hero-image {
    width: 200px;
  }
}
</style>
