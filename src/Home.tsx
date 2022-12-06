import { ChangeEvent, useState } from "react";
import styled from "styled-components";

import { solve } from "solutions";

const Info = styled.div``;

const Message = styled.div``;

const Option = styled.option``;

const Page = styled.div``;

const PuzzleInput = styled.textarea``;

const Select = styled.select``;

const Solution = styled.div``;

const SolveButton = styled.button``;

const Home = () => {
  const [day, setDay] = useState<number>(1);
  const [part, setPart] = useState<number>(1);
  const [puzzleInput, setPuzzleInput] = useState<string>("");
  const [solution, setSolution] = useState<number | string>();
  const days = Array.from({ length: 25 }, (_, i) => i + 1);

  const updateDay = (event: ChangeEvent<HTMLSelectElement>) =>
    setDay(Number(event.currentTarget.value));
  const updatePart = (event: ChangeEvent<HTMLSelectElement>) =>
    setPart(Number(event.currentTarget.value));
  const updatePuzzleInput = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setPuzzleInput(event.currentTarget.value);

  const solveProblem = () => setSolution(solve({ day, part, puzzleInput }));

  const linkToChallenge = () => `https://adventofcode.com/2022/day/${day}`;
  const linkToPuzzleInput = () => `${linkToChallenge()}/input`;

  return (
    <Page>
      <Message>Welcome to Advent of Code 2022</Message>
      <Info>
        You can check the challenge for the selected day{" "}
        <a href={linkToChallenge()} rel="noreferrer" target="_blank">
          here
        </a>
        . Puzzle input for the selected day can be found{" "}
        <a href={linkToPuzzleInput()} rel="noreferrer" target="_blank">
          here
        </a>
        .
      </Info>
      <Select name="day" id="day" onChange={updateDay} defaultValue={day}>
        {days.map((d) => (
          <Option key={d} value={d}>
            Day {d}
          </Option>
        ))}
      </Select>
      <Select name="part" id="part" onChange={updatePart} defaultValue={part}>
        <Option value={1}>Part 1</Option>
        <Option value={2}>Part 2</Option>
      </Select>
      <PuzzleInput onChange={updatePuzzleInput} value={puzzleInput} />
      <SolveButton onClick={solveProblem}>Solve</SolveButton>
      <Solution>{solution}</Solution>
    </Page>
  );
};

export default Home;
