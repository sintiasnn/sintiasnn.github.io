# sintiasnn.github.io

![Jekyll](https://img.shields.io/badge/Jekyll-4-CC0000?logo=jekyll)
![Ruby](https://img.shields.io/badge/Ruby-3-CC342D?logo=ruby)
![Liquid](https://img.shields.io/badge/Liquid-4-4EC5D4?logo=jekyll)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?logo=docker)

[Live Site](https://sintiasnn.github.io)

Personal academic portfolio built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. Showcases CV, projects, publications, and photography—all served as a static site via GitHub Pages.

---

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Author](#author)

---

## Overview

**sintiasnn.github.io** is a personal portfolio and academic landing page built on the al-folio theme. It presents a clean, responsive interface for sharing professional experience, repositories, and creative work.

---

## Project Structure

```text
sintiasnn.github.io/
├── _data/                  # YAML Data Files (CV, Repositories)
├── _includes/              # Liquid Reusable Components
├── _layouts/               # Page Layout Templates
├── _pages/                 # Site Pages (CV, Repos, Blog)
├── _plugins/               # Custom Ruby Plugins
├── _posts/                 # Blog Posts
├── _sass/                  # SCSS Stylesheets
├── assets/                 # Static Assets (PDF, Images)
├── _config.yml             # Jekyll Configuration
├── Dockerfile              # Docker Build Definition
├── docker-compose.yml      # Docker Compose Setup
├── Gemfile                 # Ruby Dependencies
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions Deployment
└── README.md               # Project Documentation
```

---

## Key Features

### 1. CV & Resume Page

A structured CV page built from YAML data with support for RenderCV and JSONResume formats, including work experience, education, skills, and more.

### 2. Repository Showcase

Automatically fetches and displays GitHub repositories via API, with stats counters and cards showing stars, forks, and languages.

### 3. Blog & Projects

Built-in blogging engine with tag filtering, project showcases, and publication listings.

### 4. Dark Mode

Full dark mode support with theme-aware styling across all pages.

### 5. Docker Development

Fully containerized development environment with hot-reload for consistent builds across any machine.

### 6. Responsive Design

Mobile-first responsive layout optimized for all screen sizes with smooth navigation.

---

## Tech Stack

- **Static Site Generator**: Jekyll 4 with Liquid templating.
- **Styling**: SCSS with Bootstrap 5 integration.
- **Data**: YAML front matter and data files.
- **Plugins**: Custom Ruby plugins (GitHub Repos fetcher, BibTeX generator).
- **Deployment**: GitHub Pages via GitHub Actions.
- **Development**: Docker Compose with live-reload.

---

## Author

**Ni Putu Sintia Wati**

- GitHub: [@sintiasnn](https://github.com/sintiasnn)
- LinkedIn: [@sintiasnn](https://linkedin.com/in/sintiasnn)
- Project: [sintiasnn.github.io](https://github.com/sintiasnn/sintiasnn.github.io)
