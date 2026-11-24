// makefun-office-joke-open — one line of office comedy for make.fun's
// "Make the AI Judge Laugh: the Office Joke Open" ($2, program/v1).
// The program writes the joke to /output/entry.txt, the file the sealed
// scorer reads, and prints it to stdout. The text is fixed, so every run
// is byte-identical (deterministic).
// The joke: a broken printer IT calls "a known issue" — and the punch
// lands in the last four words, when the raise turns out to be a known
// issue too. Specific office detail (printer, IT, six months), one pass,
// nothing left to cut.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The printer has been broken for six months. IT calls it a known issue. So is my raise.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(JOKE);
