---
title: URL Shortener
slug: url-shortener
description: A learning project for distributed systems and system design.
featured: true
order: 3
github: https://github.com/menesgul/url-shortener
status: In progress
year: "2026"
technologies:
  - Flask
  - PostgreSQL
  - Redis
  - NGINX
  - Docker
  - k6
topics:
  - Backend systems
  - Distributed systems
---

## Overview

A learning project for distributed systems and system design, built around a short URL service with shared state across multiple application replicas.

## Architecture

- Client → NGINX → 3 Flask replicas → Redis + PostgreSQL
- PostgreSQL is the source of truth.
- Redis holds cache and rate-limit state.

## Key technical decisions

- Base62 short codes keep generated URLs compact.
- Cache-aside reads use Redis before falling back to PostgreSQL.
- NGINX provides load balancing across the Flask replicas.
- Docker service discovery keeps service-to-service connections independent of fixed container addresses.

## Local k6 observations

Local Docker Desktop measurements, not production benchmarks:

- 18,457 requests at approximately 612.55 requests per second.
- p95 latency of approximately 31.68 ms.
- 0% failed requests.
- All 3 of 3 Flask replicas were observed handling requests.

## Rate-limit finding

Sequential requests produced 10 × 201 responses and 2 × 429 responses. Concurrent requests produced 13 × 201 responses and 7 × 429 responses. The full GET → decision → INCR flow is not atomic, exposing a race condition under concurrency.

## Lessons learned

- Cache-aside reads and cache invalidation boundaries.
- Shared state across replicas.
- Reverse proxies and load balancing.
- Docker service discovery.
- Load testing can expose correctness and concurrency issues, not only latency.
