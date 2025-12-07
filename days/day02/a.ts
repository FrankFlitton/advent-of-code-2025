import { readInput } from "../../utils";

const input = await readInput(import.meta.dir);

// Part A solution
function solvePartA(rawData: string): number {
  const cleanLines = rawData.replace(/\r/g, "") || "";

  const lines = cleanLines.split("\n").at(0) || "";

  const data = lines
    .split(",")
    .map((x) => {
      const [minRaw, maxRaw] = x.split("-");
      const minimum = parseInt(minRaw || "");
      const maximum = parseInt(maxRaw || "");
      return Array(maximum - minimum + 1)
        .fill(0)
        .map((_, i) => i + minimum);
    })
    .flat();

  let count = 0;
  for (const num of data) {
    const str = num.toString();

    if (
      str.length % 2 == 0 &&
      str.slice(0, str.length / 2) == str.slice(str.length / 2)
    ) {
      count += num;
    }
  }

  return count;
}

const answer = solvePartA(input);
console.log("Part A:", answer);

export { solvePartA };
