#!/usr/bin/env bun

/**
 * Advent of Code 2025 Task Runner
 * Usage: bun runner.ts <day> [part]
 * Example: bun runner.ts 1 a
 */

const args = Bun.argv.slice(2);
const dayNum = args[0];
const part = args[1]?.toLowerCase() || "a";

if (!dayNum) {
  console.error("Usage: bun runner.ts <day> [part]");
  console.error("Example: bun runner.ts 1 a");
  process.exit(1);
}

const dayStr = `day${dayNum.padStart(2, "0")}`;
const partFile = `./days/${dayStr}/${part}.ts`;

console.log(`\n🎄 Running Day ${dayNum} Part ${part.toUpperCase()}\n`);

try {
  // Import and run the solution
  await import(partFile);
} catch (error) {
  if (error instanceof Error && error.message.includes("Cannot find module")) {
    console.error(`❌ File not found: ${partFile}`);
    console.error(`\nMake sure you've created the solution file for Day ${dayNum} Part ${part.toUpperCase()}`);
  } else {
    console.error("❌ Error running solution:");
    console.error(error);
  }
  process.exit(1);
}
