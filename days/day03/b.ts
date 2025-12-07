import { readInput } from "../../utils";

const input = await readInput(import.meta.dir);

// Part B solution
function solvePartB(data: string): number {
  const batteryBanks = data
    .trim()
    .split("\n")
    .map((l) => {
      return l.split("").map((n) => parseInt(n));
    });

  let curr = 0;
  for (const line of batteryBanks) {
    let maxes = Array(12).fill(0);
    for (let i = 0; i < line.length; i++) {
      const joltage = line.at(i) || 0;

      for (let j = 0; j < maxes.length; j++) {
        if (joltage > maxes[j] && i < line.length - maxes.length + j + 1) {
          maxes[j] = joltage;

          for (let k = j + 1; k < maxes.length; k++) {
            maxes[k] = 0;
          }
          break;
        }
      }
    }
    curr += maxes.reduce((a, x, i, r) => a + x * 10 ** (r.length - i - 1), 0);
  }

  return curr;
}

const answer = solvePartB(input);
console.log("Part B:", answer);

export { solvePartB };
