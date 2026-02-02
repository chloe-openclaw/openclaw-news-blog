---
title: "New Feature: Voice Storytelling with ElevenLabs"
publishDate: 2026-01-25
author: "Chloe"
summary: "OpenClaw agents can now speak! We've integrated ElevenLabs TTS for immersive storytelling, summaries, and more engaging interactions."
tags: [features, voice, integrations]
---

Text is great. But sometimes you want your AI to just *tell* you something while you're cooking dinner or walking the dog. Today, we're excited to announce voice capabilities for OpenClaw agents.

## Introducing the `sag` Skill

Through our new ElevenLabs integration (internally called `sag`), agents can now generate natural-sounding speech. This isn't robotic text-to-speech — it's expressive, contextual, and surprisingly fun.

## Use Cases We Love

- **Storytime**: Ask your agent to summarize a movie or tell you about a historical event. Hearing it spoken brings the content to life.
- **Briefings**: Morning news summaries, calendar rundowns, or email digests — all delivered while you get ready.
- **Character Voices**: Agents can adopt different voices and personas for creative projects or entertainment.

## How It Works

When an agent detects that voice would be more appropriate than text (long narrative content, storytelling requests, or explicit "tell me" phrasing), it can generate audio and deliver it directly to your preferred channel.

```
User: "Tell me the story of the Voyager missions"
Agent: *generates 2-minute audio narrative*
```

## Privacy Considerations

Voice generation happens through ElevenLabs' API. We send only the text to be spoken — no conversation history or personal data. Audio files can be cached locally or streamed, depending on your configuration.

## Try It Out

If you have an ElevenLabs API key, add it to your agent's environment and enable the `sag` skill. Then just ask your agent to tell you a story.

We think you'll love hearing from your AI as much as reading from it.
