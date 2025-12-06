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

  const doRotate = (c = 0, direction: "L" | "R", distance = 0) => {
    let rotation = c;
    direction === 'L' ?  rotation -= distance : rotation += distance;
    rotation = ((rotation % 100) + 100) % 100;
    return rotation
  };

  let counter = 0;
  for (let i = 0; i < lines.length; i++) {
    const d = lines[i];

    const { direction, distance } = getMomentum(d?.trim());

    const newPosition = doRotate(curr, direction, distance);
    if (newPosition === 0) counter++;
    curr = newPosition;
  }

  return counter;
}

const answer = solvePartA(input);
console.log("Part A:", answer);

export { solvePartA };
