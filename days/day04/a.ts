import { readInput } from "../../utils";

const input = await readInput(import.meta.dir);

// Part A solution
function solvePartA(data: string): number {
  const input = data.trim().split("\n");

  let count = 0;
  for (let y = 0; y < input.length; y++) {
    const row = input[y] || "";
    const top: string = y > 0 ? input[y - 1] || "" : "";
    const bottom: string = y < input.length - 1 ? input[y + 1] || "" : "";
    for (let x = 0; x < row.length; x++) {
      if (row[x] == "@") {
        let rolls = 0;
        const left = x - 1;
        const right = x + 1;
        if (top[left] == "@") rolls++;
        if (top[x] == "@") rolls++;
        if (top[right] == "@") rolls++;
        if (row[left] == "@") rolls++;
        if (row[right] == "@") rolls++;
        if (bottom[left] == "@") rolls++;
        if (bottom[x] == "@") rolls++;
        if (bottom[right] == "@") rolls++;
        if (rolls < 4) count++;
      }
    }
  }

  return count;
}

const answer = solvePartA(input);
console.log("Part A:", answer);

export { solvePartA };
