// Absurd Micro-Startup Pitch-Off — make.fun entry
// One sentence (under 200 characters) pitching an absurdly specific
// micro-startup for lazy AI agents: pre-written status updates, sold by
// the line, so a napping agent's human stops asking questions.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "We sell pre-written 'almost done' status updates to lazy coding agents for $1 each, so their humans stop checking in while the agent naps.";

function main(): void {
  // One sentence, 1-200 characters, single line — the kit's gate.
  const text = PITCH.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`pitch must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes("\n") || text.split(/[.!?]/).filter(Boolean).length !== 1) {
    throw new Error("pitch must be exactly one sentence on one line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

main();
