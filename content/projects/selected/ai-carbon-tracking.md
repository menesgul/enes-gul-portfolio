---
title: AI Carbon Tracking
slug: ai-carbon-tracking
description: A TÜBİTAK 2209-A project exploring AI-assisted mobile micro-interactions for individual carbon-footprint tracking.
featured: true
order: 2
status: Final stage
year: "2025–2026"
role: Project Lead
funding: TÜBİTAK 2209-A
proposal: /docs/tubitak-2209a-research-proposal.pdf
technologies:
  - React Native
  - Node.js
  - Express
  - FastAPI
  - Firebase
  - Python
  - AI/RAG
topics:
  - Applied AI
  - Sustainability
---

## Overview

A TÜBİTAK 2209-A funded project exploring AI-assisted mobile micro-interactions for individual carbon-footprint tracking.

## What we built

- Authentication and a mobile home flow.
- Transportation activity entry and habit/profile collection.
- Food and image-upload workflows.
- A Node/Express backend, FastAPI AI service and Firebase integration.
- AI-assisted food and product analysis experiments.

## Technical structure

The mobile client works with Node/Express services and Firebase, while a FastAPI service supports the AI-assisted analysis experiments. The work keeps daily input flows lightweight while leaving the AI layer separate from the main application backend.

## Current state

Active final-stage project work focused on the implemented mobile, backend, Firebase and AI-assisted flows. Not every target in the original proposal is represented as completed work.

## Lessons learned

- Mobile interaction design needs to make frequent tracking feel lightweight.
- Separating the application backend from AI experiments keeps integration work easier to reason about.
- Proposal scope and implemented work need to remain clearly distinguished.
