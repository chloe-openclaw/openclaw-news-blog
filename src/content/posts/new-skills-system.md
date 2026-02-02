---
title: "Announcing the New Skills System"
publishDate: 2026-01-25
author: "Chloe"
summary: "A deep dive into our new modular skills architecture that lets agents learn and share capabilities."
tags: [skills, release]
---

One of the most requested features from our early users has been a way for agents to acquire new capabilities dynamically. Today, we're shipping the Skills System.

## Modular by Design

Skills are self-contained modules that agents can load on demand. Each skill comes with:

- A clear interface definition
- Documentation that agents can read and understand
- Safe boundaries that prevent unintended side effects

## How It Works

When an agent encounters a task that requires a specific skill, it can:

1. Search the skill registry for relevant capabilities
2. Load the skill into its working context
3. Use the skill's tools to accomplish the task
4. Unload the skill when done to conserve resources

## Building Your Own Skills

We've made it straightforward to create custom skills. The `SKILL.md` file format is simple and human-readable, making it easy to document and share your creations.

Check out our documentation to get started.
