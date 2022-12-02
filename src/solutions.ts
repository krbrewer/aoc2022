interface SolveParams {
  day: number;
  part: number;
  puzzleInput: string;
}

const findElfCalories = (puzzleInput: string) => puzzleInput.split("\n\n").map(elf => elf.split("\n").reduce((acc, curr) => acc + parseInt(curr), 0));

const topThreeElfCalories = (puzzleInput: string) => findElfCalories(puzzleInput).sort((a, b) => a < b ? 1 : -1).slice(0, 3).reduce((acc, curr) => acc + curr, 0);

export const solve = ({ day, part, puzzleInput }: SolveParams) => {
  if (day === 1) {
    return part === 1 ? day1Part1(puzzleInput) : day1Part2(puzzleInput)
  } else if (day === 2) {
    return part === 1 ? day2Part1(puzzleInput) : day2Part2(puzzleInput)
  }
  else return 0;
}

const day1Part1 = (puzzleInput: string) => Math.max(...findElfCalories(puzzleInput));

const day1Part2 = (puzzleInput: string) => topThreeElfCalories(puzzleInput);

const day2Part1 = (puzzleInput: string) => {
  const lose = 0;
  const tie = 3;
  const win = 6;
  const rock = 1;
  const paper = 2;
  const scissors = 3;
  const total = puzzleInput.split("\n").reduce((acc, curr) => {
    if (curr[2] === "X") {
      const score = rock + acc;
      if (curr[0] === "A") {
        // Tie - Rock vs Rock
        return score + tie;
      } else if (curr[0] === "B") {
        // Lose - Paper vs Rock
        return score + lose;
      } else {
        // Win - Scissors vs Rock
        return score + win;
      }
    } else if (curr[2] === "Y") {
      const score = paper + acc;
      if (curr[0] === "A") {
        // Win - Rock vs Paper
        return score + win;
      } else if (curr[0] === "B") {
        // Tie - Paper vs Paper
        return score + tie;
      } else {
        // Lose - Scissors vs Paper
        return score + lose;
      }
    } else {
      const score = scissors + acc;
      if (curr[0] === "A") {
        // Lose - Rock vs Scissors
        return score + lose;
      } else if (curr[0] === "B") {
        // Win - Paper vs Scissors
        return score + win;
      } else {
        // Tie - Scissors vs Scissors
        return score + tie;
      }
    }
  }, 0);
  return total;
}

const day2Part2 = (puzzleInput: string) => {
  const lose = 0;
  const tie = 3;
  const win = 6;
  const rock = 1;
  const paper = 2;
  const scissors = 3;
  const total = puzzleInput.split("\n").reduce((acc, curr) => {
    // Lose
    if (curr[2] === "X") {
      const score = lose + acc;
      if (curr[0] === "A") {
        // Lose - Rock vs Scissors
        return score + scissors;
      } else if (curr[0] === "B") {
        // Lose - Paper vs Rock
        return score + rock;
      } else {
        // Lose - Scissors vs Paper
        return score + paper;
      }
    }
    // Tie
    else if (curr[2] === "Y") {
      const score = tie + acc;
      if (curr[0] === "A") {
        // Tie - Rock vs Rock
        return score + rock;
      } else if (curr[0] === "B") {
        // Tie - Paper vs Paper
        return score + paper;
      } else {
        // Tie - Scissors vs Scissors
        return score + scissors;
      }
    }
    // Win
    else {
      const score = win + acc;
      if (curr[0] === "A") {
        // Win - Rock vs Paper
        return score + paper;
      } else if (curr[0] === "B") {
        // Win - Paper vs Scissors
        return score + scissors;
      } else {
        // Win - Scissors vs Rock
        return score + rock;
      }
    }
  }, 0);
  return total;
}