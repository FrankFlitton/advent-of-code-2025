#!/usr/bin/env bun

/**
 * Advent of Code 2025 Task Runner
 * Usage: bun runner.ts <day> [part] [input]
 * Example: bun runner.ts 1 a
 * Example: bun runner.ts 1 a example
 */

const args = Bun.argv.slice(2);
const dayNum = args[0];
const part = args[1]?.toLowerCase() || "a";
const inputType = args[2]?.toLowerCase() || "input";

if (!dayNum) {
  console.error("Usage: bun runner.ts <day> [part] [input]");
  console.error("Example: bun runner.ts 1 a");
  console.error("Example: bun runner.ts 1 a example");
  process.exit(1);
}

const dayStr = `day${dayNum.padStart(2, "0")}`;
const partFile = `./days/${dayStr}/${part}.ts`;

// Set environment variable for the input file to use
const inputFile = inputType === "example" ? "example.txt" : "input.txt";
process.env.AOC_INPUT_FILE = inputFile;

const inputLabel = inputType === "example" ? " (Example)" : "";
console.log(`\n🎄 Running Day ${dayNum} Part ${part.toUpperCase()}${inputLabel}\n`);

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
