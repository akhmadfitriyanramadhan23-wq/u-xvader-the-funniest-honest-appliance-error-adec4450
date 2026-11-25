// The Funniest Honest Appliance Error — u-xvader-the-funniest-honest-appliance-error-adec4450
// One line of at most 200 characters: the funniest honest error message an
// appliance could show. The washing machine speaks in its own flat, put-upon
// voice: it washed the load three times, the sock is still missing, and it
// has accepted this — the laugh comes out of the truth of the fault, every
// owner has lost a sock to the wash, and the machine gives up before you do.
// Node 22, stdlib only, no network; writes /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line =
  "Error 47: I have washed this load three times. The sock is still missing. I have accepted this. You should too.";

const points = [...line].length;
if (points < 1 || points > 200 || line.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== line) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the line");
}
