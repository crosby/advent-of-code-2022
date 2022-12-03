import * as fs from "fs";
import { exit } from "process";
import * as rl from "readline";

const priorities = [...Array(52).keys()].reduce<Record<string, number>>(
  (obj, i) => {
    obj[i < 26 ? String.fromCharCode(i + 97) : String.fromCharCode(i + 39)] =
      i + 1;
    return obj;
  },
  {}
);

async function day3Part1() {
  const input = fs.createReadStream("./src/day-3/input.txt");
  const backpacks = rl.createInterface({ input, crlfDelay: Infinity });

  let prioritySum = 0;

  for await (const backpack of backpacks) {
    const firstCompartment = backpack.substring(0, backpack.length / 2);
    const secondCompartment = backpack.substring(backpack.length / 2);

    const commonLetters = [...firstCompartment].filter((l) =>
      secondCompartment.includes(l)
    );

    prioritySum += priorities[commonLetters[0]];
  }

  console.log(`Part 1: Sum of priorities is ${prioritySum}`);
}

async function day3Part2() {
  const input = fs.createReadStream("./src/day-3/input.txt");
  const backpacks = rl.createInterface({ input, crlfDelay: Infinity });

  let prioritySum = 0;
  let group: string[] = [];

  for await (const backpack of backpacks) {
    group.push(backpack);

    if (group.length === 3) {
      const commonLetters = [...group[0]].filter((i) => {
        return group[1].includes(i) && group[2].includes(i);
      });

      prioritySum += priorities[commonLetters[0]];
      group = [];
    }
  }

  console.log(`Part 2: Sum of priorities is ${prioritySum}`);
}

await day3Part1();
await day3Part2();
