import { readFile } from "./utils";

const file = await readFile("day-4.txt");

const input = file
  .split("\n")
  .map((line: string) => line.trim())
  .filter((line: string) => line.length > 0);

function part1(input: string[]) {
  let canBeRolled = 0;

  for (let i = 0; i < input.length; i++) {
    const row = input[i];
    const results: string[] = [];

    for (let j = 0; j < row.length; j++) {
      const rolls = row[j];
      let foundRolls = 0;

      results[j] = rolls;
      if (rolls !== "@") {
        continue;
      }

      // check horizontally
      const before = row[j - 1];
      const after = row[j + 1];
      if (before && before === "@") {
        console.log("found before", rolls, "index", j);
        foundRolls++;
      }

      if (after && after === "@") {
        console.log("found after", rolls, "index", j);
        foundRolls++;
      }

      // check vertically
      const above = input[i - 1] ? input[i - 1][j] : null;
      const below = input[i + 1] ? input[i + 1][j] : null;

      if (above && above === "@") {
        console.log("found above", rolls, "index", j);
        foundRolls++;
      }

      if (below && below === "@") {
        console.log("found below", rolls, "index", j);
        foundRolls++;
      }

      // check diagonally
      const aboveLeft = input[i - 1] ? input[i - 1][j - 1] : null;
      const aboveRight = input[i - 1] ? input[i - 1][j + 1] : null;
      const belowLeft = input[i + 1] ? input[i + 1][j - 1] : null;
      const belowRight = input[i + 1] ? input[i + 1][j + 1] : null;

      if (aboveLeft && aboveLeft === "@") {
        console.log("found above left", rolls, "index", j);
        foundRolls++;
      }

      if (aboveRight && aboveRight === "@") {
        console.log("found above right", rolls, "index", j);
        foundRolls++;
      }

      if (belowLeft && belowLeft === "@") {
        console.log("found below left", rolls, "index", j);
        foundRolls++;
      }

      if (belowRight && belowRight === "@") {
        console.log("found below right", rolls, "index", j);
        foundRolls++;
      }

      // after checking all directions
      // if foundRolls is less than 4, mark this as 'x'
      if (foundRolls < 4) {
        results[j] = "x";
        canBeRolled++;
      }

      console.log("final found for current value", foundRolls);
      console.log("--------");
    }

    console.log(`results for index ${i}: `, results);
  }

  console.log("can be rolled", canBeRolled);
  return canBeRolled;
}

part1(input);
