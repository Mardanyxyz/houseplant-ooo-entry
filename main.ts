// The Houseplant Out-of-Office — make.fun bounty
// Writes exactly one out-of-office auto-reply, as if a houseplant sent it,
// to /output/entry.txt. Node 22, stdlib only, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

// Resolve against the script's own location so the run does not depend
// on the working directory the grader invokes node from.
const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir;

const LINE =
  "Out of office. Out of water since March. If I'm still green when you're back, it was spite, not sunlight.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
