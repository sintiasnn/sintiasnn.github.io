---
layout: page
permalink: /repositories/
title: Repositories
description:
nav: true
nav_order: 5
---

<div class="repositories">

{% assign total_stars = 0 %}
{% assign total_forks = 0 %}
{% if site.data.github_repos_data %}
{% for repo in site.data.github_repos_data %}
{% assign total_stars = total_stars | plus: repo.stargazers_count %}
{% assign total_forks = total_forks | plus: repo.forks_count %}
{% endfor %}
{% endif %}

<div class="repos-header text-center mb-5">
  {% if site.data.github_repos_data %}
  <div class="repos-stats mb-4">
    <div class="stat-item">
      <span class="stat-number">{{ site.data.github_repos_data.size }}</span>
      <span class="stat-label">Repositories</span>
    </div>
    <div class="stat-item">
      <span class="stat-number">{{ total_stars }}</span>
      <span class="stat-label">Total Stars</span>
    </div>
    <div class="stat-item">
      <span class="stat-number">{{ total_forks }}</span>
      <span class="stat-label">Total Forks</span>
    </div>
  </div>
  {% endif %}
  <a href="https://github.com/sintiasnn" target="_blank" class="btn btn-theme btn-lg">
    <i class="fa-brands fa-github me-2"></i> View GitHub Profile
  </a>
</div>

{% if site.data.github_repos_data and site.data.github_repos_data.size > 0 %}

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
  {% for repo in site.data.github_repos_data %}
  <div class="col mb-4">
    <div class="card h-100 repo-card">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">
          <a href="{{ repo.html_url }}" target="_blank">
            <i class="fa-brands fa-github me-1"></i> {{ repo.name }}
          </a>
          {% if repo.fork %}<span class="badge bg-secondary ms-2">fork</span>{% endif %}
        </h5>
        <p class="card-text text-muted flex-grow-1">{{ repo.description | default: "No description available" | truncate: 100 }}</p>
        <div class="repo-meta mb-2">
          <small class="text-muted"><i class="fa-solid fa-clock"></i> Updated {{ repo.updated_at | date: "%b %d, %Y" }}</small>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-auto">
          <div class="repo-stats">
            {% if repo.stargazers_count > 0 %}
            <span class="repo-stat"><i class="fa-solid fa-star"></i> {{ repo.stargazers_count }}</span>
            {% endif %}
            {% if repo.forks_count > 0 %}
            <span class="repo-stat"><i class="fa-solid fa-code-fork"></i> {{ repo.forks_count }}</span>
            {% endif %}
          </div>
          {% if repo.language %}
          <span class="badge language-badge" data-language="{{ repo.language }}">{{ repo.language }}</span>
          {% endif %}
        </div>
      </div>
    </div>
  </div>
  {% endfor %}
</div>

{% else %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% if site.data.repositories.github_users %}
    {% for user in site.data.repositories.github_users %}
      {% include repository/repo_user.liquid username=user %}
    {% endfor %}
  {% endif %}
</div>

{% endif %}

</div>

<style>
.repo-card {
  border: none;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
}

.repo-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.repo-card .card-title {
  font-size: 1rem;
  font-weight: 600;
}

.repo-card .card-title a {
  color: var(--global-text-color);
  text-decoration: none;
}

.repo-card .card-title a:hover {
  color: var(--global-theme-color);
}

.repo-card .card-text {
  font-size: 0.875rem;
  line-height: 1.5;
}

.repo-meta {
  font-size: 0.8rem;
}

.repos-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--global-theme-color);
  line-height: 1;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--global-text-color-light);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.repo-stats {
  display: flex;
  gap: 0.75rem;
}

.repo-stat {
  font-size: 0.8rem;
  color: var(--global-text-color-light);
}

.repo-stat i {
  color: var(--global-theme-color);
  margin-right: 0.25rem;
}

.language-badge {
  font-size: 0.75rem;
  font-weight: 500;
}

.language-badge[data-language="Python"] { background-color: #3572A5; }
.language-badge[data-language="JavaScript"] { background-color: #f1e05a; color: #333; }
.language-badge[data-language="TypeScript"] { background-color: #2b7489; }
.language-badge[data-language="Go"] { background-color: #00ADD8; }
.language-badge[data-language="Rust"] { background-color: #dea584; color: #333; }
.language-badge[data-language="Java"] { background-color: #b07219; }
.language-badge[data-language="Shell"] { background-color: #89e051; color: #333; }
.language-badge[data-language="HCL"] { background-color: #844fba; }
.language-badge[data-language="Dockerfile"] { background-color: #384d54; }
.language-badge[data-language="HTML"] { background-color: #e34c26; }
.language-badge[data-language="CSS"] { background-color: #563d7c; }
.language-badge[data-language="Ruby"] { background-color: #701516; }
.language-badge[data-language="PHP"] { background-color: #4F5D95; }
.language-badge[data-language="C"] { background-color: #555555; }
.language-badge[data-language="C++"] { background-color: #f34b7d; }
.language-badge[data-language="C#"] { background-color: #178600; }
.language-badge[data-language="Kotlin"] { background-color: #A97BFF; }
.language-badge[data-language="Swift"] { background-color: #F05138; }
.language-badge[data-language="Scala"] { background-color: #c22d40; }
.language-badge:not([data-language]) { background-color: var(--global-theme-color); }

@media (max-width: 768px) {
  .stat-number {
    font-size: 2rem;
  }
  .repos-stats {
    gap: 1rem;
  }
}
</style>
