import { readFile } from "./utils";

const read = await readFile("day-3.txt");

const input = read
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.length > 0);

// console.log("input is", input);

function part1(input: string[]) {
  let maxArr: number[] = [];
  for (let i = 0; i < input.length; i++) {
    const numbers = input[i]; // full number string
    let max = 0;
    // console.log("numer is", numbers);
    for (let j = 0; j < numbers.length; j++) {
      const digit = numbers[j]; // individual digit
      for (let k = j + 1; k < numbers.length; k++) {
        const adj = numbers[k];
        // console.log("digit", digit, "adj", adj);
        const joined = [digit, adj].join("");
        max = Math.max(max, parseInt(joined, 10));
      }
    }

    maxArr.push(max);
  }
}

function part2(input: string[], total = 12) {
  const results: number[] = [];
  for (let i = 0; i < input.length; i++) {
    const sequence = input[i];

    const len = sequence.length;

    let n = total - 1;
    let start = 0;
    const digits: number[] = [];

    while (n >= 0) {
      for (let i = start; i < len - n; i++) {
        if (sequence[i] > sequence[start]) {
          start = i;
        }
      }

      digits.push(+sequence[start]);
      start += 1;
      n--;
    }

    results.push(parseInt(digits.join(""), 10));
  }

  return results;
}

function sum(numbers: number[]) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

const part2Results = part2(input);
const sumOfPart2 = sum(part2Results);

console.log("part 2", part2Results);
console.log("sum of part 2", sumOfPart2);
