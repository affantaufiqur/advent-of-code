import { readFile } from "./utils";

const read = await readFile("day-3.txt");

const input = read
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.length > 0);

// console.log("input is", input);

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

function sum(numbers: number[]) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log("maxArr", maxArr);
console.log("sum", sum(maxArr));
