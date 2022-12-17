import { lstat } from "fs";

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
  } else if (day === 11) {
    return part === 1 ? day11Part1(puzzleInput) : day11Part2(puzzleInput);
  } else if (day === 12) {
    return part === 1 ? day12Part1(puzzleInput) : day12Part2(puzzleInput);
  } else if (day === 13) {
    return part === 1 ? day13Part1(puzzleInput) : day13Part2(puzzleInput);
  } else if (day === 14) {
    return part === 1 ? day14Part1(puzzleInput) : day14Part2(puzzleInput);
  } else if (day === 15) {
    return part === 1 ? day15Part1(puzzleInput) : day15Part2(puzzleInput);
  } else if (day === 16) {
    return part === 1 ? day16Part1(puzzleInput) : day16Part2(puzzleInput);
  } else if (day === 17) {
    return part === 1 ? day17Part1(puzzleInput) : day17Part2(puzzleInput);
  } else if (day === 18) {
    return part === 1 ? day18Part1(puzzleInput) : day18Part2(puzzleInput);
  } else if (day === 19) {
    return part === 1 ? day19Part1(puzzleInput) : day19Part2(puzzleInput);
  } else if (day === 20) {
    return part === 1 ? day20Part1(puzzleInput) : day20Part2(puzzleInput);
  } else if (day === 21) {
    return part === 1 ? day21Part1(puzzleInput) : day21Part2(puzzleInput);
  } else if (day === 22) {
    return part === 1 ? day22Part1(puzzleInput) : day22Part2(puzzleInput);
  } else if (day === 23) {
    return part === 1 ? day23Part1(puzzleInput) : day23Part2(puzzleInput);
  } else if (day === 24) {
    return part === 1 ? day24Part1(puzzleInput) : day24Part2(puzzleInput);
  } else if (day === 25) {
    return part === 1 ? day25Part1(puzzleInput) : day25Part2(puzzleInput);
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

interface PacketItem {
  value: string;
  count: number;
}

const day6Part1 = (puzzleInput: string) => {
  let i = 0;
  const distinctLength = 4;
  const input = puzzleInput.split("");
  let startOfPacket = [] as PacketItem[];
  while (i < puzzleInput.length) {
    // Start up array
    if (i < distinctLength) {
      startOfPacket.find((packet) => packet.value === input[i])
        ? startOfPacket.map(
            (packet) => packet.value === input[i] && packet.count++
          )
        : startOfPacket.push({ value: input[i], count: 1 });
    } else if (startOfPacket.find((packet) => packet.count > 1)) {
      startOfPacket.find((packet) => packet.value === input[i])
        ? startOfPacket.map(
            (packet) => packet.value === input[i] && packet.count++
          )
        : startOfPacket.push({ value: input[i], count: 1 });
      startOfPacket.map(
        (packet) => packet.value === input[i - distinctLength] && packet.count--
      );
      startOfPacket = startOfPacket.filter((packet) => packet.count > 0);
    } else return i;
    i++;
  }
};

const day6Part2 = (puzzleInput: string) => {
  let i = 0;
  const distinctLength = 14;
  const input = puzzleInput.split("");
  let startOfPacket = [] as PacketItem[];
  while (i < puzzleInput.length) {
    // Start up array
    if (i < distinctLength) {
      startOfPacket.find((packet) => packet.value === input[i])
        ? startOfPacket.map(
            (packet) => packet.value === input[i] && packet.count++
          )
        : startOfPacket.push({ value: input[i], count: 1 });
    } else if (startOfPacket.find((packet) => packet.count > 1)) {
      startOfPacket.find((packet) => packet.value === input[i])
        ? startOfPacket.map(
            (packet) => packet.value === input[i] && packet.count++
          )
        : startOfPacket.push({ value: input[i], count: 1 });
      startOfPacket.map(
        (packet) => packet.value === input[i - distinctLength] && packet.count--
      );
      startOfPacket = startOfPacket.filter((packet) => packet.count > 0);
    } else return i;
    i++;
  }
};

const day7Part1 = (puzzleInput: string) => {
  const sizes = [] as number[];
  let totalInLimit = 0;
  puzzleInput.split("\n").forEach((line) => {
    if (line[0] === "$") {
      const [, command, directory] = line.split(" ");
      // Change Directory Handling
      if (command === "cd") {
        if (directory !== "..") {
          sizes.push(0);
        } else {
          if (sizes[sizes.length - 1] <= 100_000) {
            totalInLimit += sizes[sizes.length - 1];
          }
          sizes.pop();
        }
      }
    } else {
      const [type] = line.split(" ");
      if (type !== "dir") {
        sizes.forEach((p, i) => {
          sizes[i] = p + parseInt(type);
        });
      }
    }
  });

  return totalInLimit;
};

const day7Part2 = (puzzleInput: string) => {
  const sizes = [] as number[];
  const completedDirs = [] as number[];
  puzzleInput.split("\n").forEach((line) => {
    if (line[0] === "$") {
      const [, command, directory] = line.split(" ");
      // Change Directory Handling
      if (command === "cd") {
        if (directory !== "..") {
          sizes.push(0);
        } else {
          completedDirs.push(sizes[sizes.length - 1]);
          sizes.pop();
        }
      }
    } else {
      const [type] = line.split(" ");
      if (type !== "dir") {
        sizes.forEach((p, i) => {
          sizes[i] = sizes[i] + parseInt(type);
        });
      }
    }
  });

  const unusedSpace = 70_000_000 - sizes[0];
  const neededSpace = 30_000_000 - unusedSpace;

  return Math.min(...completedDirs.filter((dir) => dir >= neededSpace));
};

const day8Part1 = (puzzleInput: string) => {
  const rows = puzzleInput.split("\n").length;
  const columns = puzzleInput.split("\n")[0].length;

  const visibilityMap = puzzleInput
    .split("\n")
    .map((input) => input.split("").map((i) => parseInt(i)))
    .reduce(
      (acc: number[][], curr, idx) => {
        if (idx === 0 || idx === rows - 1) {
          acc[idx].fill(1);
        } else {
          for (let i = 0; i < columns; i++) {
            if (i === 0 || i === columns - 1) {
              acc[idx][i] = 1;
            } else {
              const left = curr.slice(0, i);
              const right = curr.slice(i + 1, columns);
              const vertical = puzzleInput
                .split("\n")
                .map((input) => parseInt(input[i]));
              const above = vertical.slice(0, idx);
              const below = vertical.slice(idx + 1, rows);

              if (
                curr[i] > Math.max(...left) ||
                curr[i] > Math.max(...right) ||
                curr[i] > Math.max(...above) ||
                curr[i] > Math.max(...below)
              ) {
                acc[idx][i] = 1;
              }
            }
          }
        }
        return acc;
      },
      Array(rows)
        .fill(0)
        .map(() => Array(columns).fill(0))
    );
  return visibilityMap.flat().reduce((acc, curr) => acc + curr);
};

const findTreeDistance = (value: number, array: number[]) =>
  array.findIndex((a) => a >= value) === -1
    ? array.length
    : array.findIndex((a) => a >= value) + 1;

const day8Part2 = (puzzleInput: string) => {
  const rows = puzzleInput.split("\n").length;
  const columns = puzzleInput.split("\n")[0].length;

  const visibilityMap = puzzleInput
    .split("\n")
    .map((input) => input.split("").map((i) => parseInt(i)))
    .reduce(
      (acc: number[][], curr, idx) => {
        if (idx !== 0 && idx !== rows - 1) {
          for (let i = 1; i < columns - 1; i++) {
            if (i !== 0 && i !== columns - 1) {
              const left = curr.slice(0, i).reverse();
              const right = curr.slice(i + 1, columns);
              const vertical = puzzleInput
                .split("\n")
                .map((input) => parseInt(input[i]));
              const above = vertical.slice(0, idx).reverse();
              const below = vertical.slice(idx + 1, rows);

              const leftDistance = findTreeDistance(curr[i], left);
              const rightDistance = findTreeDistance(curr[i], right);
              const aboveDistance = findTreeDistance(curr[i], above);
              const belowDistance = findTreeDistance(curr[i], below);

              acc[idx][i] =
                leftDistance * rightDistance * aboveDistance * belowDistance;
            }
          }
        }
        return acc;
      },
      Array(rows)
        .fill(0)
        .map(() => Array(columns).fill(0))
    );
  return Math.max(...visibilityMap.flat());
};

const day9Part1 = (puzzleInput: string) => {
  const instructions = puzzleInput.split("\n").map((input) => input.split(" "));
  const H = [0, 0];
  let T = [0, 0];
  const s = [0, 0];
  let map = [["H"]];
  let past = [0, 0];

  const tMap = instructions.reduce(
    (acc, curr) => {
      map[s[0]][s[1]] = ".";
      map[T[0]][T[1]] = ".";
      map[H[0]][H[1]] = ".";
      if (curr[0] === "L") {
        const diff = parseInt(curr[1]) - H[1];
        // Need more to the left of start
        if (diff > 0) {
          map.forEach((m) => m.unshift(...Array(diff).fill(".")));
          acc.forEach((a) => a.unshift(...Array(diff).fill(".")));
          H[1] = H[1] + diff;
          T[1] = T[1] + diff;
          s[1] = s[1] + diff;
        }
      } else if (curr[0] === "R") {
        const diff = H[1] + parseInt(curr[1]) - (map[0].length - 1);
        // Need more to the right of start
        if (diff > 0) {
          map.forEach((m) => m.push(...Array(diff).fill(".")));
          acc.forEach((a) => a.push(...Array(diff).fill(".")));
        }
      } else if (curr[0] === "U") {
        const diff = parseInt(curr[1]) - H[0];
        // Need more to the top of start
        if (diff > 0) {
          map.unshift(
            ...Array(diff)
              .fill(".")
              .map(() => Array(map[0].length).fill("."))
          );
          acc.unshift(
            ...Array(diff)
              .fill(".")
              .map(() => Array(acc[0].length).fill("."))
          );
          H[0] = H[0] + diff;
          T[0] = T[0] + diff;
          s[0] = s[0] + diff;
        }
      } else {
        const diff = H[0] + parseInt(curr[1]) - (map.length - 1);
        // Need more to the bottom of start
        if (diff > 0) {
          map.push(
            ...Array(diff)
              .fill(".")
              .map(() => Array(map[0].length).fill("."))
          );
          acc.push(
            ...Array(diff)
              .fill(".")
              .map(() => Array(acc[0].length).fill("."))
          );
        }
      }

      for (let i = 0; i < parseInt(curr[1]); i++) {
        map[s[0]][s[1]] = ".";
        map[T[0]][T[1]] = ".";
        map[H[0]][H[1]] = ".";
        past = [...H];
        if (curr[0] === "L") {
          H[1]--;
        } else if (curr[0] === "R") {
          H[1]++;
        } else if (curr[0] === "U") {
          H[0]--;
        } else {
          H[0]++;
        }
        if (Math.abs(H[0] - T[0]) > 1 || Math.abs(H[1] - T[1]) > 1) {
          if (H[0] > T[0]) {
            T[0]++;
          } else if (H[0] < T[0]) {
            T[0]--;
          }
          if (H[1] > T[1]) {
            T[1]++;
          } else if (H[1] < T[1]) {
            T[1]--;
          }
        }
        acc[T[0]][T[1]] = "#";
      }
      map[s[0]][s[1]] = "s";
      map[T[0]][T[1]] = "T";
      map[H[0]][H[1]] = "H";
      return acc;
    },
    [["#"]]
  );
  return tMap.flat().filter((tm) => tm === "#").length;
};

const day9Part2 = (puzzleInput: string) => {
  const instructions = puzzleInput.split("\n").map((input) => input.split(" "));
  const H = [0, 0];
  let T1 = [0, 0];
  let T2 = [0, 0];
  let T3 = [0, 0];
  let T4 = [0, 0];
  let T5 = [0, 0];
  let T6 = [0, 0];
  let T7 = [0, 0];
  let T8 = [0, 0];
  let T9 = [0, 0];
  const s = [0, 0];
  let map = [["H"]];

  const tMap = instructions.reduce(
    (acc, curr) => {
      map[s[0]][s[1]] = ".";
      map[T9[0]][T9[1]] = ".";
      map[T8[0]][T8[1]] = ".";
      map[T7[0]][T7[1]] = ".";
      map[T6[0]][T6[1]] = ".";
      map[T5[0]][T5[1]] = ".";
      map[T4[0]][T4[1]] = ".";
      map[T3[0]][T3[1]] = ".";
      map[T2[0]][T2[1]] = ".";
      map[T1[0]][T1[1]] = ".";
      map[H[0]][H[1]] = ".";
      if (curr[0] === "L") {
        const diff = parseInt(curr[1]) - H[1];
        // Need more to the left of start
        if (diff > 0) {
          map.forEach((m) => m.unshift(...Array(diff).fill(".")));
          acc.forEach((a) => a.unshift(...Array(diff).fill(".")));
          H[1] = H[1] + diff;
          T1[1] = T1[1] + diff;
          T2[1] = T2[1] + diff;
          T3[1] = T3[1] + diff;
          T4[1] = T4[1] + diff;
          T5[1] = T5[1] + diff;
          T6[1] = T6[1] + diff;
          T7[1] = T7[1] + diff;
          T8[1] = T8[1] + diff;
          T9[1] = T9[1] + diff;
          s[1] = s[1] + diff;
        }
      } else if (curr[0] === "R") {
        const diff = H[1] + parseInt(curr[1]) - (map[0].length - 1);
        // Need more to the right of start
        if (diff > 0) {
          map.forEach((m) => m.push(...Array(diff).fill(".")));
          acc.forEach((a) => a.push(...Array(diff).fill(".")));
        }
      } else if (curr[0] === "U") {
        const diff = parseInt(curr[1]) - H[0];
        // Need more to the top of start
        if (diff > 0) {
          map.unshift(
            ...Array(diff)
              .fill(".")
              .map(() => Array(map[0].length).fill("."))
          );
          acc.unshift(
            ...Array(diff)
              .fill(".")
              .map(() => Array(acc[0].length).fill("."))
          );
          H[0] = H[0] + diff;
          T1[0] = T1[0] + diff;
          T2[0] = T2[0] + diff;
          T3[0] = T3[0] + diff;
          T4[0] = T4[0] + diff;
          T5[0] = T5[0] + diff;
          T6[0] = T6[0] + diff;
          T7[0] = T7[0] + diff;
          T8[0] = T8[0] + diff;
          T9[0] = T9[0] + diff;
          s[0] = s[0] + diff;
        }
      } else {
        const diff = H[0] + parseInt(curr[1]) - (map.length - 1);
        // Need more to the bottom of start
        if (diff > 0) {
          map.push(
            ...Array(diff)
              .fill(".")
              .map(() => Array(map[0].length).fill("."))
          );
          acc.push(
            ...Array(diff)
              .fill(".")
              .map(() => Array(acc[0].length).fill("."))
          );
        }
      }

      for (let i = 0; i < parseInt(curr[1]); i++) {
        let next = [0, 0];
        let train = [0, 0];
        map[s[0]][s[1]] = ".";
        map[T9[0]][T9[1]] = ".";
        map[T8[0]][T8[1]] = ".";
        map[T7[0]][T7[1]] = ".";
        map[T6[0]][T6[1]] = ".";
        map[T5[0]][T5[1]] = ".";
        map[T4[0]][T4[1]] = ".";
        map[T3[0]][T3[1]] = ".";
        map[T2[0]][T2[1]] = ".";
        map[T1[0]][T1[1]] = ".";
        map[H[0]][H[1]] = ".";
        next = [...H];
        if (curr[0] === "L") {
          H[1]--;
        } else if (curr[0] === "R") {
          H[1]++;
        } else if (curr[0] === "U") {
          H[0]--;
        } else {
          H[0]++;
        }
        if (Math.abs(H[0] - T1[0]) > 1 || Math.abs(H[1] - T1[1]) > 1) {
          if (H[0] > T1[0]) {
            T1[0]++;
          } else if (H[0] < T1[0]) {
            T1[0]--;
          }
          if (H[1] > T1[1]) {
            T1[1]++;
          } else if (H[1] < T1[1]) {
            T1[1]--;
          }
          if (Math.abs(T1[0] - T2[0]) > 1 || Math.abs(T1[1] - T2[1]) > 1) {
            if (T1[0] > T2[0]) {
              T2[0]++;
            } else if (T1[0] < T2[0]) {
              T2[0]--;
            }
            if (T1[1] > T2[1]) {
              T2[1]++;
            } else if (T1[1] < T2[1]) {
              T2[1]--;
            }
            if (Math.abs(T2[0] - T3[0]) > 1 || Math.abs(T2[1] - T3[1]) > 1) {
              if (T2[0] > T3[0]) {
                T3[0]++;
              } else if (T2[0] < T3[0]) {
                T3[0]--;
              }
              if (T2[1] > T3[1]) {
                T3[1]++;
              } else if (T2[1] < T3[1]) {
                T3[1]--;
              }
              if (Math.abs(T3[0] - T4[0]) > 1 || Math.abs(T3[1] - T4[1]) > 1) {
                if (T3[0] > T4[0]) {
                  T4[0]++;
                } else if (T3[0] < T4[0]) {
                  T4[0]--;
                }
                if (T3[1] > T4[1]) {
                  T4[1]++;
                } else if (T3[1] < T4[1]) {
                  T4[1]--;
                }
                if (
                  Math.abs(T4[0] - T5[0]) > 1 ||
                  Math.abs(T4[1] - T5[1]) > 1
                ) {
                  if (T4[0] > T5[0]) {
                    T5[0]++;
                  } else if (T4[0] < T5[0]) {
                    T5[0]--;
                  }
                  if (T4[1] > T5[1]) {
                    T5[1]++;
                  } else if (T4[1] < T5[1]) {
                    T5[1]--;
                  }
                  if (
                    Math.abs(T5[0] - T6[0]) > 1 ||
                    Math.abs(T5[1] - T6[1]) > 1
                  ) {
                    if (T5[0] > T6[0]) {
                      T6[0]++;
                    } else if (T5[0] < T6[0]) {
                      T6[0]--;
                    }
                    if (T5[1] > T6[1]) {
                      T6[1]++;
                    } else if (T5[1] < T6[1]) {
                      T6[1]--;
                    }
                    if (
                      Math.abs(T6[0] - T7[0]) > 1 ||
                      Math.abs(T6[1] - T7[1]) > 1
                    ) {
                      if (T6[0] > T7[0]) {
                        T7[0]++;
                      } else if (T6[0] < T7[0]) {
                        T7[0]--;
                      }
                      if (T6[1] > T7[1]) {
                        T7[1]++;
                      } else if (T6[1] < T7[1]) {
                        T7[1]--;
                      }
                      if (
                        Math.abs(T7[0] - T8[0]) > 1 ||
                        Math.abs(T7[1] - T8[1]) > 1
                      ) {
                        if (T7[0] > T8[0]) {
                          T8[0]++;
                        } else if (T7[0] < T8[0]) {
                          T8[0]--;
                        }
                        if (T7[1] > T8[1]) {
                          T8[1]++;
                        } else if (T7[1] < T8[1]) {
                          T8[1]--;
                        }
                        if (
                          Math.abs(T8[0] - T9[0]) > 1 ||
                          Math.abs(T8[1] - T9[1]) > 1
                        ) {
                          if (T8[0] > T9[0]) {
                            T9[0]++;
                          } else if (T8[0] < T9[0]) {
                            T9[0]--;
                          }
                          if (T8[1] > T9[1]) {
                            T9[1]++;
                          } else if (T8[1] < T9[1]) {
                            T9[1]--;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        acc[T9[0]][T9[1]] = "#";
      }
      map[s[0]][s[1]] = "s";
      map[T9[0]][T9[1]] = "9";
      map[T8[0]][T8[1]] = "8";
      map[T7[0]][T7[1]] = "7";
      map[T6[0]][T6[1]] = "6";
      map[T5[0]][T5[1]] = "5";
      map[T4[0]][T4[1]] = "4";
      map[T3[0]][T3[1]] = "3";
      map[T2[0]][T2[1]] = "2";
      map[T1[0]][T1[1]] = "1";
      map[H[0]][H[1]] = "H";
      return acc;
    },
    [["#"]]
  );
  return tMap.flat().filter((tm) => tm === "#").length;
};

interface Day10CPU {
  cycle: number;
  signalStrength: number;
  x: number;
}

const day10Part1 = (puzzleInput: string) =>
  puzzleInput.split("\n").reduce(
    (acc: Day10CPU, curr: string) => {
      for (let i = 0; i < (curr === "noop" ? 1 : 2); i++) {
        acc.cycle++;
        if (
          acc.cycle === 20 ||
          acc.cycle === 60 ||
          acc.cycle === 100 ||
          acc.cycle === 140 ||
          acc.cycle === 180 ||
          acc.cycle === 220
        ) {
          console.log(acc.cycle, acc.cycle * acc.x, acc.x, i);
          acc.signalStrength += acc.cycle * acc.x;
        }

        if (i === 1) {
          acc.x += parseInt(curr.split(" ")[1]);
        }
      }
      return acc;
    },
    { cycle: 0, signalStrength: 0, x: 1 }
  ).signalStrength;

const day10Part2 = (puzzleInput: string) => {
  const display = [] as string[];

  puzzleInput.split("\n").reduce(
    (acc: Day10CPU, curr: string) => {
      for (let i = 0; i < (curr === "noop" ? 1 : 2); i++) {
        if (Math.abs((acc.cycle % 40) - acc.x) < 2) {
          display.push("#");
        } else {
          display.push(".");
        }
        acc.cycle++;

        if (i === 1) {
          acc.x += parseInt(curr.split(" ")[1]);
        }
      }
      return acc;
    },
    { cycle: 0, signalStrength: 0, x: 1 }
  );
  console.log(display.join("").replace(/.{40}/g, "$&\n"));
  return display.join("").replace(/.{40}/g, "$&\n");
};

interface Monkey {
  items: number[];
  operation: {
    multiply: boolean;
    value: string;
  };
  test: {
    divisible: number;
    true: number;
    false: number;
  };
}

const day11Part1 = (puzzleInput: string) => {
  const input = puzzleInput.split("\n\n").map((input) => input.split("\n"));
  const monkeys = input.reduce((acc: Monkey[], curr) => {
    const monkey = {
      items: curr[1]
        .split(":")[1]
        .split(",")
        .map((item) => parseInt(item)),
      operation: {
        multiply: curr[2].split("*").length === 2,
        value: curr[2].split("*")[1]?.trim() ?? curr[2].split("+")[1]?.trim(),
      },
      test: {
        divisible: parseInt(curr[3].split("by")[1]),
        true: parseInt(curr[4].split("monkey")[1]),
        false: parseInt(curr[5].split("monkey")[1]),
      },
    };
    acc.push(monkey);
    return acc;
  }, []);

  const monkeyBusiness = Array(monkeys.length).fill(0);

  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < monkeys.length; j++) {
      monkeyBusiness[j] += monkeys[j].items.length;
      for (let k = 0; k < monkeys[j].items.length; k) {
        const item = monkeys[j].items.shift()!;
        const worry = Math.floor(
          (monkeys[j].operation.multiply
            ? item *
              (monkeys[j].operation.value === "old"
                ? item
                : parseInt(monkeys[j].operation.value))
            : item +
              (monkeys[j].operation.value === "old"
                ? item
                : parseInt(monkeys[j].operation.value))) / 3
        );
        worry % monkeys[j].test.divisible
          ? monkeys[monkeys[j].test.false].items.push(worry)
          : monkeys[monkeys[j].test.true].items.push(worry);
      }
    }
  }
  return monkeyBusiness
    .sort((a, b) => (a >= b ? -1 : 1))
    .slice(0, 2)
    .reduce((acc, curr) => acc * curr, 1);
};

const day11Part2 = (puzzleInput: string) => {
  const input = puzzleInput.split("\n\n").map((input) => input.split("\n"));
  const monkeys = input.reduce((acc: Monkey[], curr) => {
    const monkey = {
      items: curr[1]
        .split(":")[1]
        .split(",")
        .map((item) => parseInt(item)),
      operation: {
        multiply: curr[2].split("*").length === 2,
        value: curr[2].split("*")[1]?.trim() ?? curr[2].split("+")[1]?.trim(),
      },
      test: {
        divisible: parseInt(curr[3].split("by")[1]),
        true: parseInt(curr[4].split("monkey")[1]),
        false: parseInt(curr[5].split("monkey")[1]),
      },
    };
    acc.push(monkey);
    return acc;
  }, []);

  const monkeyBusiness = Array(monkeys.length).fill(0);
  const rounds = 10_000;

  const modulo = monkeys.reduce((acc, curr) => acc * curr.test.divisible, 1);

  for (let i = 0; i < rounds; i++) {
    for (let j = 0; j < monkeys.length; j++) {
      monkeyBusiness[j] += monkeys[j].items.length;
      for (let k = 0; k < monkeys[j].items.length; k) {
        const item = monkeys[j].items.shift()!;
        const worry = monkeys[j].operation.multiply
          ? item *
            (monkeys[j].operation.value === "old"
              ? item
              : parseInt(monkeys[j].operation.value))
          : item +
            (monkeys[j].operation.value === "old"
              ? item
              : parseInt(monkeys[j].operation.value));
        worry % monkeys[j].test.divisible
          ? monkeys[monkeys[j].test.false].items.push(worry % modulo)
          : monkeys[monkeys[j].test.true].items.push(worry % modulo);
      }
    }
  }
  console.log(monkeys);
  console.log(monkeyBusiness, "after", rounds, "rounds");
  return monkeyBusiness
    .sort((a, b) => (a >= b ? -1 : 1))
    .slice(0, 2)
    .reduce((acc, curr) => acc * curr, 1);
};

const day12Part1 = (puzzleInput: string) => 0;

const day12Part2 = (puzzleInput: string) => 0;

const day13Part1 = (puzzleInput: string) => 0;

const day13Part2 = (puzzleInput: string) => 0;

const day14Part1 = (puzzleInput: string) => 0;

const day14Part2 = (puzzleInput: string) => 0;

const day15Part1 = (puzzleInput: string) => 0;

const day15Part2 = (puzzleInput: string) => 0;

const day16Part1 = (puzzleInput: string) => 0;

const day16Part2 = (puzzleInput: string) => 0;

const day17Part1 = (puzzleInput: string) => 0;

const day17Part2 = (puzzleInput: string) => 0;

const day18Part1 = (puzzleInput: string) => 0;

const day18Part2 = (puzzleInput: string) => 0;

const day19Part1 = (puzzleInput: string) => 0;

const day19Part2 = (puzzleInput: string) => 0;

const day20Part1 = (puzzleInput: string) => 0;

const day20Part2 = (puzzleInput: string) => 0;

const day21Part1 = (puzzleInput: string) => 0;

const day21Part2 = (puzzleInput: string) => 0;

const day22Part1 = (puzzleInput: string) => 0;

const day22Part2 = (puzzleInput: string) => 0;

const day23Part1 = (puzzleInput: string) => 0;

const day23Part2 = (puzzleInput: string) => 0;

const day24Part1 = (puzzleInput: string) => 0;

const day24Part2 = (puzzleInput: string) => 0;

const day25Part1 = (puzzleInput: string) => 0;

const day25Part2 = (puzzleInput: string) => 0;
