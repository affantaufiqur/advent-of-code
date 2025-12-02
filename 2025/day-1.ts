const file = Bun.file("./day-1.txt");
const input = (await file.text()) as string;

let count = 50;

const dials = input
  .split("\n")
  .map((f) => f.trim())
  .filter((f) => f.length > 0);

let atZero = 0;

function dialFn(value: number, direction: "L" | "R") {
  if (direction === "L") {
    return (count - value) % 100;
  }

  return (count + value) % 100;
}

for (let i = 0; i < dials.length; i++) {
  const dial = dials[i];
  const operator = dial.charAt(0);

  const number = parseInt(dial.slice(1), 10);

  if (operator === "L") {
    count = dialFn(number, "L");
    if (count === 0) atZero++;
    continue;
  }

  if (operator === "R") {
    count = dialFn(number, "R");
    if (count === 0) atZero++;
    continue;
  }
}

console.log(atZero);
