# JARVIS — Real-Time AI Assistant with Jev Routing (Windows desktop)

A real-time Jarvis console with Jev by TypeSafe AI as the fast decision and
routing layer. Every command is classified in milliseconds and routed to
Email, Calendar, Vault, Invoices, Agent Pool, or Systems, with the structured
decision (intent, route, confidence, measured latency, LLM escalation) shown
on a live 5-stage pipeline and routing log.

## What's new — Nov 12, 2026 build (everything below is already inside, no setup)

- **Agent & Skills Hub** — 6 one-tap agents (Big Tony, Research, Code, Studio, Security, Muse) and 9+ one-tap skills, plus a build-your-own-skill box. Local Mode works with no internet; Online Mode lights up when a Jev key is pasted (optional).
- **Stacks** — File Stack, Project Stack, and the Agent & Collective Stack (16 agents, 25 skills, 11 capabilities, 52 entries) with Integrate buttons, an Integration Pack download, and Send-to-Sandbox.
- **Sandbox** — test updates, upgrades, and new additions safely before they touch anything, then download a Build Update Pack.
- **Integrations & Code Workshop** — Jarvis asks before merging anything with another setup or module, then writes the code or extension file for you.
- **Platform Crew** — Lofibadger (Town), Noen stuph Sr (Zenzap), and Claude with your real setup (Tony · Free, "369 studio hot", Musio Create, Gold DAW v2.0).
- **Workflow agents & skills** — Workflow Watcher, Big Tony as Workflow Orchestrator, Nano-Agent Hive, Deep Research Agent, Code Generator Agent, Gio, plus Publish Run Check, Installer-Build Check, Weekly Briefing, and more.
- **Gemini Draft Studio** — pick a kind of writing, say what it's about, get a finished draft to download or send to Quick Notes. **Rea Assist** — reads Jarvis's live state and suggests your next moves. Both are in-app remakes running on Jarvis's own engine (no live connection, no key needed).

## Run the .exe (Windows)

Open the `JARVIS-win32-x64` folder and double-click **`JARVIS.exe`**.
No install, no server. `Ctrl+Shift+J` brings JARVIS to the front from
anywhere. Or double-click `Run-JARVIS.bat` in this folder.

Note: this .exe was packaged on Linux, so its internal file properties
still say "Electron" (the runtime) — the file itself is named JARVIS.exe
and it opens the Jarvis app. Rebuilding it on a Windows PC with
`npm run dist` stamps the proper JARVIS name and description instead.

## Jev — the real decision layer

Jev is TypeSafe AI's "System One" model: not a chatbot, it takes a state plus
typed questions (Choice / Score / Noul) and returns decisions with calibrated
probabilities. Endpoint `https://api.typesafe.ai/v1/systemone`, pinned model
`jev-1.13.0`, about 70–500 ms a call, $0.042 per million input tokens, output
free. Docs: docs.typesafe.ai. Get a key at console.typesafe.ai and paste it
into the Jev API panel inside the app — the key stays in-session only and is
never stored. Until a key is pasted, the app runs its built-in local routing
engine, honestly labelled LOCAL ENGINE in the app.

## What it routes (from the build)

- **Email actions** — draft, triage, and action prep (sending needs your approval in your mail app)
- **Calendar requests** — scheduling intents with time/date handling
- **Vault queries** — the app's own vault/knowledge routing
- **Invoice handling** — try the built-in test: "Pay invoice #1042" runs the full pipeline (verified: intent billing.pay, confidence 0.91, 18 ms)
- **Agent task routing** — dispatch to the agent pool with escalation rules
- **Jev Reflex** — the fast pre-decision toggle; with Reflex off, the app shows the slow all-LLM path for comparison
- **Voice** — speech input/output through the browser speech engine (needs a mic + Chrome/Edge)

## Rebuild the .exe yourself (Windows PC)

You need Node.js installed once (https://nodejs.org — LTS is fine), then in
this folder:

```
npm install
npm run dist
```

That rebuilds the Windows .exe from this exact code. The `.exe` is built
from this code on the machine that runs the command; it is not downloaded
from anywhere.

## What's inside

- `JARVIS/` — the app itself: `index.html` (the full app, self-contained), `main.js` (Electron window shell), `package.json`
- `JARVIS-win32-x64/` — the packaged Windows app: `JARVIS.exe` plus its runtime files (keep the whole folder together)
- `Run-JARVIS.bat` — Windows double-click launcher
