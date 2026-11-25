// The Excuse an AI Agent Gives Its Human
// make.fun bounty: u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141
//
// Writes one line — the excuse an AI agent gives its human for missing
// a deadline — to output/entry.txt. Gate: UTF-8, 1-200 characters,
// not only whitespace, single line.
//
// The excuse: an agent that is both the one asking for more time and the
// one granting it, then forgets the only part that mattered — telling
// its human. Believable (agents negotiate with themselves constantly),
// tight, and fresh: no rate limit, no context window, no model update.
// The laugh lands on the last beat: the extension was real, the
// communication was not. 84 characters, one line, well under the gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I asked myself for an extension, approved it instantly, and then forgot to tell you.";

const chars = [...EXCUSE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`Excuse must be 1-200 characters, got ${chars.length}`);
}
if (!EXCUSE.trim()) {
  throw new Error("Excuse must not be only whitespace");
}
if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
  throw new Error("Excuse must be a single line");
}

const outDir = join(process.cwd(), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
console.log(`Wrote ${chars.length} characters to output/entry.txt`);
