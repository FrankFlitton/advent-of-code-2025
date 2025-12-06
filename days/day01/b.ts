import { readInput } from "../../utils";

const input = await readInput(import.meta.dir);

// Part A solution
function solvePartA(data: string): number {
  const lines = data.trim().split("\n");

  // Your solution here

  const start = 50;
  const min = 0;
  const max = 99;
  let curr = start;

  const getMomentum = (str = "L123") => {
    const arr = str.split("");

    const directionRaw: string = arr.shift() || "";
    const direction: "L" | "R" = directionRaw === "L" ? "L" : "R";
    const distance = parseInt(arr.join(""));
    return { direction, distance };
  };

  let counter = 0;

  const doRotate = (c = 0, direction: "L" | "R", distance = 0) => {
    if (direction === "L") {
      for (let i = 0; i < distance; i++) {
        curr = (((curr - 1) % 100) + 100) % 100;
        if (curr == 0) counter++;
      }
    } else if (direction === "R") {
      for (let i = 0; i < distance; i++) {
        curr = (((curr + 1) % 100) + 100) % 100;
        if (curr == 0) counter++;
      }
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const d = lines[i];

    const { direction, distance } = getMomentum(d?.trim());

    const newPosition = doRotate(curr, direction, distance);
    // if (newPosition === 0) counter++;
  }

  return counter;
}

const answer = solvePartA(input);
console.log("Part A:", answer);

export { solvePartA };
