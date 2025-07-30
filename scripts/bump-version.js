"use strict";
/**
 * Bump the version of the website in package.json (and package-lock.json if it exists).
 *
 * Usage:
 *   npm run version:bump 1.1.0
 *
 * This will update the "version" field in package.json (and package-lock.json)
 * to "1.1.0".
 */

const fs = require("fs");
const path = require("path");

const [, , newVersion] = process.argv;

if (!newVersion) {
  console.error("[version:bump] ❌  Please provide a version, e.g. 1.1.0");
  process.exit(1);
}

// Very naive semver check – ensure it looks like x.y.z
if (!/^\d+\.\d+\.\d+(-[\w.-]+)?$/.test(newVersion)) {
  console.error(`[version:bump] ❌  '${newVersion}' is not a valid semver version`);
  process.exit(1);
}

const updateFileVersion = (filePath) => {
  const absolute = path.resolve(__dirname, "..", filePath);
  if (!fs.existsSync(absolute)) return;

  const json = JSON.parse(fs.readFileSync(absolute, "utf8"));
  json.version = newVersion;
  fs.writeFileSync(absolute, JSON.stringify(json, null, 2) + "\n");
  console.log(`[version:bump] ✅  Updated ${filePath} → ${newVersion}`);
};

updateFileVersion("package.json");
updateFileVersion("package-lock.json");

console.log("[version:bump] 🎉  Version bump complete!");
