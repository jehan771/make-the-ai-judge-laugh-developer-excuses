// Make the AI Judge Laugh: Developer Excuses
// Writes one funny single-line developer excuse to /output/entry.txt.
// Deterministic: the same fixed line on every run, no randomness, no I/O
// beyond the single output file.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The deploy didn't break prod. It just deleted the bug that was holding everything together.";

// Self-check the house gate: 1 to 200 characters, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
