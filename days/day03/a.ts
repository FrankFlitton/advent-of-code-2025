import { readInput } from "../../utils";

const input = await readInput(import.meta.dir);

// Part A solution
function solvePartA(data: string): number {
  const batteryBanks = data
    .trim()
    .split("\n")
    .map((l) => {
      return l.split("").map((n) => parseInt(n));
    });

  // Your solution here

  let curr = 0;
  for (let index = 0; index < batteryBanks.length; index++) {
    let largest = 0;
    const bank = batteryBanks.at(index) || [];

    // find first
    for (let b1 = 0; b1 < bank.length - 1; b1++) {
      const battery1 = bank?.at(b1) || 0;
      // find second
      for (let b2 = b1 + 1; b2 < bank.length; b2++) {
        const battery2 = bank?.at(b2) || 0;
        const curr = parseInt(`${battery1}${battery2}`);

        if (curr > largest) {
          largest = curr;
        }
      }
    }

    curr += largest;
  }

  return curr;
}

const answer = solvePartA(input);
console.log("Part A:", answer);

export { solvePartA };
