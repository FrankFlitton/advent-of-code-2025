/**
 * Read input file from the given directory
 * Defaults to input.txt, but can specify example.txt or other files
 * Can be overridden by setting AOC_INPUT_FILE environment variable via runner
 */
export async function readInput(
  dir: string,
  filename: string = "input.txt"
): Promise<string> {
  // Check if runner specified an input file via environment variable
  const inputFile = process.env.AOC_INPUT_FILE || filename;
  const file = Bun.file(`${dir}/${inputFile}`);
  return await file.text();
}
