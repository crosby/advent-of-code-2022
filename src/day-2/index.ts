import * as fs from "fs";
import * as rl from "readline";

async function day2Part1() {
  const input = fs.createReadStream("./src/day-2/input.txt");
  const rounds = rl.createInterface({ input, crlfDelay: Infinity });
  let points = 0;

  for await (const round of rounds) {
    switch (round) {
      // Rock vs Rock
      case "A X":
        points += 1 + 3; // 1 for Rock, 3 for draw
        break;
      // Rock vs Paper
      case "A Y":
        points += 2 + 6; // 2 for Paper, 6 for win
        break;
      // Rock vs Scissors
      case "A Z":
        points += 3 + 0; // 3 for Scissors, 0 for loss
        break;
      // Paper vs Rock
      case "B X":
        points += 1 + 0; // 1 for Rock, 0 for loss
        break;
      // Paper vs Paper
      case "B Y":
        points += 2 + 3; // 2 for Paper, 3 for draw
        break;
      // Paper vs Scissors
      case "B Z":
        points += 3 + 6; // 3 for Scissors, 6 for win
        break;
      // Scissors vs Rock
      case "C X":
        points += 1 + 6; // 1 for Rock, 6 for win
        break;
      // Scissors vs Paper
      case "C Y":
        points += 2 + 0; // 2 for Paper, 0 for loss
        break;
      // Scissors vs Scissors
      case "C Z":
        points += 3 + 3; // 3 for Scissors, 3 for draw
        break;
    }
  }

  console.log(`Part 1: Total points is ${points}`);
}

async function day2Part2() {
  const input = fs.createReadStream("./src/day-2/input.txt");
  const rounds = rl.createInterface({ input, crlfDelay: Infinity });
  let points = 0;

  for await (const round of rounds) {
    switch (round) {
      // Rock + Loss (Scissors)
      case "A X":
        points += 3 + 0; // 3 for Scissors, 0 for loss
        break;
      // Rock vs Draw (Rock)
      case "A Y":
        points += 1 + 3; // 1 for Rock, 3 for draw
        break;
      // Rock vs Win (Paper)
      case "A Z":
        points += 2 + 6; // 2 for Paper, 6 for win
        break;
      // Paper vs Loss (Rock)
      case "B X":
        points += 1 + 0; // 1 for Rock, 0 for loss
        break;
      // Paper vs Draw (Paper)
      case "B Y":
        points += 2 + 3; // 2 for Paper, 3 for draw
        break;
      // Paper vs Win (Scissors)
      case "B Z":
        points += 3 + 6; // 3 for Scissors, 6 for win
        break;
      // Scissors vs Loss (Paper)
      case "C X":
        points += 2 + 0; // 2 for Paper, 0 for loss
        break;
      // Scissors vs Draw (Scissors)
      case "C Y":
        points += 3 + 3; // 3 for Scissors, 3 for draw
        break;
      // Scissors vs Win (Rock)
      case "C Z":
        points += 1 + 6; // 1 for Rock, 6 for win
        break;
    }
  }

  console.log(`Part 2: Total points is ${points}`);
}

await day2Part1();
await day2Part2();
