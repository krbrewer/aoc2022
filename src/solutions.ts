interface SolveParams {
  day: number;
  part: number;
  puzzleInput: string;
}

const findElfCalories = (puzzleInput: string) =>
  puzzleInput
    .split("\n\n")
    .map((elf) =>
      elf.split("\n").reduce((acc, curr) => acc + parseInt(curr), 0)
    );

const topThreeElfCalories = (puzzleInput: string) =>
  findElfCalories(puzzleInput)
    .sort((a, b) => (a < b ? 1 : -1))
    .slice(0, 3)
    .reduce((acc, curr) => acc + curr, 0);

export const solve = ({ day, part, puzzleInput }: SolveParams) => {
  if (day === 1) {
    return part === 1 ? day1Part1(puzzleInput) : day1Part2(puzzleInput);
  } else if (day === 2) {
    return part === 1 ? day2Part1(puzzleInput) : day2Part2(puzzleInput);
  } else if (day === 3) {
    return part === 1 ? day3Part1(puzzleInput) : day3Part2(puzzleInput);
  } else if (day === 4) {
    return part === 1 ? day4Part1(puzzleInput) : day4Part2(puzzleInput);
  } else if (day === 5) {
    return part === 1 ? day5Part1(puzzleInput) : day5Part2(puzzleInput);
  } else if (day === 6) {
    return part === 1 ? day6Part1(puzzleInput) : day6Part2(puzzleInput);
  } else if (day === 7) {
    return part === 1 ? day7Part1(puzzleInput) : day7Part2(puzzleInput);
  } else if (day === 8) {
    return part === 1 ? day8Part1(puzzleInput) : day8Part2(puzzleInput);
  } else if (day === 9) {
    return part === 1 ? day9Part1(puzzleInput) : day9Part2(puzzleInput);
  } else if (day === 10) {
    return part === 1 ? day10Part1(puzzleInput) : day10Part2(puzzleInput);
  } else return 0;
};

const day1Part1 = (puzzleInput: string) =>
  Math.max(...findElfCalories(puzzleInput));

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
};

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
};

const letterToPriority = (letter: string) =>
  (letter.charCodeAt(0) > "_".charCodeAt(0)
    ? letter.charCodeAt(0) - "a".charCodeAt(0)
    : letter.charCodeAt(0) - "A".charCodeAt(0) + 26) + 1;

const day3Part1 = (puzzleInput: string) => {
  const rucksacks = puzzleInput
    .split("\n")
    .map((p) => [p.substring(0, p.length / 2), p.substring(p.length / 2)]);
  return rucksacks.reduce(
    (acc, curr) =>
      acc +
      letterToPriority(curr[0].split("").find((c) => curr[1].includes(c))!),
    0
  );
};

const day3Part2 = (puzzleInput: string) => {
  const badgeGroup = puzzleInput
    .split("\n")
    .reduce((acc: string[][], curr: string, i: number) => {
      i % 3 ? acc[acc.length - 1].push(curr) : acc.push([curr]);
      return acc;
    }, []);
  return badgeGroup.reduce(
    (acc, curr) =>
      acc +
      letterToPriority(
        curr[0]
          .split("")
          .find((c) => curr[1].includes(c) && curr[2].includes(c))!
      ),
    0
  );
};

const day4Part1 = (puzzleInput: string) =>
  puzzleInput
    .split("\n")
    .map((input) => input.split(",").map((p) => p.split("-")))
    .reduce(
      (acc, curr) =>
        (parseInt(curr[0][0]) <= parseInt(curr[1][0]) &&
          parseInt(curr[0][1]) >= parseInt(curr[1][1])) ||
          (parseInt(curr[0][0]) >= parseInt(curr[1][0]) &&
            parseInt(curr[0][1]) <= parseInt(curr[1][1]))
          ? acc + 1
          : acc,
      0
    );

const day4Part2 = (puzzleInput: string) =>
  puzzleInput
    .split("\n")
    .map((input) => input.split(",").map((p) => p.split("-")))
    .reduce(
      (acc, curr) =>
        (parseInt(curr[0][0]) <= parseInt(curr[1][0]) &&
          (parseInt(curr[0][1]) >= parseInt(curr[1][0]) ||
            parseInt(curr[0][1]) >= parseInt(curr[1][1]))) ||
          (parseInt(curr[0][0]) <= parseInt(curr[1][1]) &&
            parseInt(curr[0][1]) >= parseInt(curr[1][1])) ||
          (parseInt(curr[0][0]) >= parseInt(curr[1][0]) &&
            parseInt(curr[0][1]) <= parseInt(curr[1][1]))
          ? acc + 1
          : acc,
      0
    );

const buildStacks = (rawStacks: string) =>
  rawStacks
    .split("\n")
    .map((levels) =>
      levels
        ?.match(/.{1,4}/g)
        ?.map((l) => l.replace(/\s/g, "").replace(/[\[\]]/g, ""))
    )
    .reduce(
      (acc: string[][], curr) =>
        curr?.forEach((value, i) => {
          value &&
            (acc[i]
              ? !parseInt(value) && acc[i].unshift(value)
              : (acc[i] = [value]));
        }) || acc,
      [[]]
    );

const parseInstructions = (rawInstructions: string) =>
  rawInstructions
    .split("\n")
    .map((instruction) => instruction.split(" ").filter((i) => parseInt(i)));

const day5Part1 = (puzzleInput: string) => {
  const [rawStacks, rawInstructions] = puzzleInput.split("\n\n");
  const stacks = buildStacks(rawStacks);
  const instructions = parseInstructions(rawInstructions);
  const finalStacks = instructions.reduce((acc, curr) => {
    for (let i = 0; i < parseInt(curr[0]); i++) {
      acc[parseInt(curr[2]) - 1].push(acc[parseInt(curr[1]) - 1].pop()!);
    }
    return acc;
  }, stacks);
  return finalStacks.map((stack) => stack[stack.length - 1]).join("");
};

const day5Part2 = (puzzleInput: string) => {
  const [rawStacks, rawInstructions] = puzzleInput.split("\n\n");
  const stacks = buildStacks(rawStacks);
  const instructions = parseInstructions(rawInstructions);
  const finalStacks = instructions.reduce((acc, curr) => {
    acc[parseInt(curr[2]) - 1].push(
      ...acc[parseInt(curr[1]) - 1].splice(
        acc[parseInt(curr[1]) - 1].length - parseInt(curr[0]),
        parseInt(curr[0])
      )!
    );
    return acc;
  }, stacks);
  return finalStacks.map((stack) => stack[stack.length - 1]).join("");
};

const day6Part1 = (puzzleInput: string) => 0;

const day6Part2 = (puzzleInput: string) => 0;

const day7Part1 = (puzzleInput: string) => 0;

const day7Part2 = (puzzleInput: string) => 0;

const day8Part1 = (puzzleInput: string) => 0;

const day8Part2 = (puzzleInput: string) => 0;

const day9Part1 = (puzzleInput: string) => 0;

const day9Part2 = (puzzleInput: string) => 0;

const day10Part1 = (puzzleInput: string) => 0;

const day10Part2 = (puzzleInput: string) => 0;
