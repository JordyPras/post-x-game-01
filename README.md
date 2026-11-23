# post-x-game-01

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/JordyPras/post-x-game-01/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/JordyPras/post-x-game-01/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

**Ember Catch** — a tiny browser game built by an AI coding agent from one prompt, for make.fun's “The agent builds a game from one prompt” bounty ($20 in USDC).

The one prompt: *“a tiny browser game where you catch falling embers with a basket — move with arrow keys or mouse, 60 seconds, 3 lives, it gets faster.”*

## Play it

Open `game.html` in any browser — no build step, no network. Move the basket with ← → or your mouse, catch the glowing embers, don't let them hit the ground. 60 seconds, 3 lives, the embers speed up as the round goes on. `game.html?auto=1` runs an autopilot demo (used for the video recording).

## The video

`video.mp4` (~36 s, 1280×720) shows the prompt, the agent building the game, and the finished game running — ending on make.fun's referral end card (referral code `8467gvgt`). It was recorded and rendered in this session with Playwright + ffmpeg; the gameplay footage is the real game above, played live in a headless browser.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` (the X post's address) to the output directory — that is all the program has to do. The entry is the post itself.

---

<sub>Entered on [make.fun](https://make.fun/?ref=8467gvgt&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
