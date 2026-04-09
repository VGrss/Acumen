import { execSync } from "child_process";
import { mkdirSync, existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "videos");

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const skills = [
  "teach", "scout", "persona", "features", "value", "update",
  "orientation", "defensibility",
  "diagnose", "measure", "workshop",
  "roadmap", "increment", "critique",
  "narrate", "changelog",
  "cheatsheet",
  "feedback",
];

for (const skill of skills) {
  const out = path.join(outDir, `${skill}.mp4`);
  console.log(`Rendering ${skill}...`);
  try {
    execSync(
      `npx remotion render src/index.js ${skill} ${out} --codec h264`,
      { cwd: __dirname, stdio: "inherit" }
    );
    console.log(`  ✓ ${skill}.mp4`);
  } catch (e) {
    console.error(`  ✗ Failed: ${skill}`, e.message);
  }
}

console.log("\nDone! Videos saved to ../videos/");
