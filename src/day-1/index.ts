import * as fs from "fs";
import * as rl from "readline";
import { binaryInsert } from "binary-insert";

async function day1() {
  const input = fs.createReadStream("./src/day-1/input.txt");
  const lines = rl.createInterface({ input, crlfDelay: Infinity });

  const elves: number[] = [];
  const sortedElves: number[] = [];

  let elf = 0;
  for await (const line of lines) {
    if (line) {
      elf += Number(line);
    } else {
      elves.push(elf);
      binaryInsert(sortedElves, elf, (a, b) => b - a);
      elf = 0;
    }
  }

  const highestCalories = Math.max(...elves);
  const highestCalorieElf = elves.indexOf(highestCalories);

  console.log(
    `Part 1: Elf ${highestCalorieElf} carries ${highestCalories} calories`
  );

  // Part 2
  const totalCalories = sortedElves[0] + sortedElves[1] + sortedElves[2];
  console.log(`Part 2: Total of top 3 calorie elves: ${totalCalories}`);
}

await day1();
