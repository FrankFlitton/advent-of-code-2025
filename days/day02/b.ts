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
      const arr = [];
      for (let index = 0; index < maximum - minimum + 1; index++) {
        arr.push(index + minimum);
      }
      return arr;
    })
    .flat();

  let count = 0;

  for (const num of data) {
    const str = num.toString();
    for (let i = 1; i <= str.length / 2; i++) {
      if (str.length % i == 0) {
        let j = i;
        for (; j < str.length; j += i) {
          if (str.slice(j - i, j) != str.slice(j, j + i)) break;
        }
        if (j >= str.length) {
          count += num;
          break;
        }
      }
    }
  }

  return count;
}

const answer = solvePartA(input);
console.log("Part A:", answer);

export { solvePartA };
