const file = Bun.file("./day-1.txt");
const input = (await file.text()) as string;

let count = 50;

const dials = input
  .split("\n")
  .map((f) => f.trim())
  .filter((f) => f.length > 0);

let atZero = 0;
let pastZero = 0;

function dialFn(value: number, direction: "L" | "R") {
  if (direction === "L") {
    const passes =
      Math.floor(value / 100) + (count > 0 && value % 100 >= count ? 1 : 0);
    pastZero += passes;
    return (((count - value) % 100) + 100) % 100;
  }

  const passes = Math.floor((count + value) / 100) - Math.floor(count / 100);
  pastZero += passes;
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

console.log("at zero", atZero, "during rotations", pastZero);
