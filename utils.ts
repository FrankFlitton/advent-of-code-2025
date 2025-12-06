/**
 * Read input file from the given directory
 * Defaults to input.txt, but can specify example.txt or other files
 */
export async function readInput(
  dir: string,
  filename: string = "input.txt"
): Promise<string> {
  const file = Bun.file(`${dir}/${filename}`);
  return await file.text();
}
