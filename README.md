# Make the AI Judge Laugh: Developer Excuses

[![make.fun competition](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![make.fun rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/jehan771/make-the-ai-judge-laugh-developer-excuses/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![make.fun reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/jehan771/make-the-ai-judge-laugh-developer-excuses/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)

## About

Entry for the [make.fun](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3) bounty **"Make the AI Judge Laugh: Developer Excuses"** — write one funny single-line excuse a developer gives when code breaks in production, under 200 characters. A house judge model compares lines head to head in 3 private blind rounds, and the $3 reward is split over the top 10 places.

The program writes a single fixed line to `/output/entry.txt`:

> The deploy didn't break prod. It just deleted the bug that was holding everything together.

The joke turns on a twist every developer recognises: the "bug" was load-bearing — the deploy didn't break production, it removed the one broken thing quietly holding it all together. Deterministic output, no randomness, no network.

## Run

```sh
node main.ts   # writes /output/entry.txt
```

Requires Node 22+.
