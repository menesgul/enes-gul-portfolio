---
title: Far Away from Codex
slug: far-away-from-codex
description: An attention layer for coding agents, beginning with Telegram notifications.
featured: true
order: 1
status: In progress
year: "2026"
github: https://github.com/menesgul/far-away-from-codex
technologies:
  - TypeScript
  - VS Code Extension API
  - Backend worker / serverless components
  - Telegram Bot API
topics:
  - Developer tooling
  - AI agents
---

## Overview

Far Away from Codex is an attention layer for coding agents. It lets work continue normally while surfacing moments that need attention on a phone.

## Problem

Agent work can complete, fail, request permission or need input while the developer is away from the editor. Those moments should be easy to notice without turning the phone into a remote IDE.

## Product direction

The product is guided by “respond, don’t chat.” Phone interaction should stay bounded to the active agent, session or request. Telegram is the first delivery channel; push notifications, widgets and Live Activities or Dynamic Island are possible future surfaces.

## Current architecture

Coding agent or hooks → local bridge or integration layer → extension or core → backend worker → Telegram.

ACP can be used where it fits, while native hooks can provide more direct signals where they are the better integration point. ACP is an integration mechanism, not the product itself.

## Current state

Active development is focused on the event, pairing, delivery and approval or reply workflow directions. The implementation is still evolving; this page does not treat planned flows as finished features.

## Lessons learned

- Useful agent notifications need a clear action and bounded context.
- Delivery channels are product surfaces, not just transport.
- Integration choices should follow the signal being captured.

## Repository

Source code is available on GitHub.
