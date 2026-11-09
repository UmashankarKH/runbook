# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## State of this directory

This folder is not a git repo and holds no code yet, only `runbook-setup-explained.md` (notes on the Runbook "Agent Deployment Ops" work trial). The workflow repo is meant to be created separately (see below); update this file once it exists and `rb init` has run.

## Context

Goal: build and polish **one** agent workflow on the Runbook platform for the customer "Ridgeline", chosen from a customer transcript (not yet provided). Judged on business case, a live Agent Run walkthrough (steps, decisions, tool calls, human escalation), architecture (tools, what calls what, human approval points, guardrails), failure paths/testing, and accuracy measurement. Principle: less is more; a simple, explainable design beats an impressive one.

## `rb` CLI (Windows / PowerShell)

- Env is the interview server, not production: `rb env https://api-interview.myrunbook.com` (`rb env` prints the current one). Config lives in `~\.rb`; the shell is in `~\.rb\bin` (on user PATH; restart terminals to pick it up).
- `rb auth login` is two-step: the first run prints a link and code and exits; approve in the browser, then run it again to finish and install the full binary.
- Workflows are uploaded by pushing to a GitHub repo that Runbook watches: `git init`, add an empty GitHub repo as `origin`, push `main`, then `rb init` (installs helper files including the `rb-interact` skill).
- Before building, read `.claude/skills/rb-interact/SKILL.md` (or `.agents/skills/rb-interact/SKILL.md`). On any `rb` failure, follow the `Next:` hints it prints.
- Do not pipe remote installers straight into `iex` without reading them; download and review first.

## Workflow rules

- Start with a smoke test, then the full flow. Test the happy path and a failure path, and inspect each run in **Runs**.
- At the end, unpublish every workflow: Workflow → Deployments → "..." → Unpublish.

@AGENTS.md
