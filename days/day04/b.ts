import { readInput } from "../../utils";

const input = await readInput(import.meta.dir);

// Part B solution
function solvePartB(data: string): number {
  const input = data
    .trim()
    .split("\n")
    .filter((x) => x.length > 0)
    .map((x) => x.split(""));

  let count = 0;
  while (true) {
    const removed = [];
    for (let y = 0; y < input.length; y++) {
      const row: string[] = input[y] || [];
      const top: string[] = y > 0 ? input[y - 1] || [] : [];
      const bottom: string[] = y < input.length - 1 ? input[y + 1] || [] : [];
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
          if (rolls < 4) removed.push([x, y]);
        }
      }
    }
    for (const coordinate of removed) {
      const x = coordinate[0];
      const y = coordinate[1];
      if (x !== undefined && y !== undefined && input[y]) {
        input[y][x] = ".";
      }
    }
    count += removed.length;
    if (removed.length == 0) break;
  }

  return count;
}

const answer = solvePartB(input);
console.log("Part B:", answer);

export { solvePartB };
