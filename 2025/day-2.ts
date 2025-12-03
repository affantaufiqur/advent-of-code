import { readFile } from "./utils";

const input = await readFile("./day-2.txt");

const ids = input
  .split(",")
  .map((f) => f.trim())
  .filter((f) => f.length > 0);

const sequences: string[] = [];

for (let i = 0; i < ids.length; i++) {
  const id = ids[i];
  const range = id.split("-");
  const start = parseInt(range[0], 10);
  const end = parseInt(range[1], 10);

  for (let j = start; j <= end; j++) {
    const number = j.toString();
    const repeated = isRepeated(number);
    repeated && sequences.push(number);
  }
}

function isRepeated(number: string) {
  const len = number.length;
  if (len % 2 !== 0) return false;

  const mid = len / 2;

  return number.slice(0, mid) === number.slice(mid);
}

function sumSequences(sequences: string[]) {
  return sequences.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
}

console.log("ids", ids);
console.log("sequences", sequences);
console.log("sum", sumSequences(sequences));
