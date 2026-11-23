// Ember Catch — make.fun entry for "The agent builds a game from one prompt".
//
// The entry itself is an X post carrying a short video: an AI coding agent
// builds this tiny browser game (game.html) from a single prompt, the video
// shows the prompt, the agent working and the finished game running, and it
// ends on make.fun's referral end card. The post is handed in through
// POST.json at this repository's root.
//
// This program has exactly one job: copy POST.json from the repository into
// the grader's output directory, where the gate reads the post's address.
// It uses only the Node standard library and needs no network.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

// Validate the post address before handing it to the grader: a POST.json
// that still carries the POST_ID_HERE placeholder is not a real post yet.
// Warn loudly on stdout, but still write the output so the run itself
// stays green and the missing post is visible instead of silent.
try {
  const post = JSON.parse(readFileSync(source, 'utf8')) as { url?: unknown };
  const url = typeof post.url === 'string' ? post.url : '';
  if (!url || url.includes('POST_ID_HERE') || !/^https:\/\/(x\.com|twitter\.com)\//.test(url)) {
    console.warn(
      `WARNING: POST.json has no real X post URL yet (url: ${JSON.stringify(url)}). ` +
        'Replace POST_ID_HERE with the published post ID before submitting.',
    );
  }
} catch (err) {
  console.warn(`WARNING: could not validate POST.json at ${source}: ${(err as Error).message}`);
}

try {
  copyFileSync(source, target);
  console.log(`POST.json copied to ${target}`);
} catch (err) {
  console.error(`Could not copy POST.json from ${source}: ${(err as Error).message}`);
  process.exit(1);
}
