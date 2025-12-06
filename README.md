# Advent of Code 2025

Task runner for solving Advent of Code 2025 puzzles using Bun.

## Setup

```bash
bun install
```

## Usage

### Run a specific day and part

```bash
# Run day 1 part A
bun run day 1 a

# Run day 1 part B
bun run day 1 b

# Run day 15 part A
bun run day 15 a
```

### Watch mode (auto-rerun on file changes)

```bash
# Watch and run day 1 part A
bun run watch 1 a

# Watch and run day 5 part B
bun run watch 5 b
```

## Project Structure

```
days/
  day01/
    a.ts          # Part A solution
    b.ts          # Part B solution
    input.txt     # Your puzzle input
    example.txt   # Example from problem description
  day02/
    ...
```

## Creating a New Day

1. Copy the `days/day01` folder structure
2. Update the day number (e.g., `day02`, `day03`, etc.)
3. Paste your puzzle input into `input.txt`
4. Paste the example from the problem into `example.txt`
5. Write your solution in `a.ts` or `b.ts`
6. Run with `bun run watch <day> <part>`

## Tips

- Use `example.txt` to test your solution with the example data
- Modify `readInput()` call in your solution to use `"example.txt"` for testing
- The `utils.ts` file contains helper functions for reading input files
