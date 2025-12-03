export async function readFile(filePath: string): string {
  const file = Bun.file(filePath);
  const input = (await file.text()) as string;

  return input;
}
