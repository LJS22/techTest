import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TriangleChecker = () => {
  const [firstSide, setFirstSide] = useState(null);
  const [secondSide, setSecondSide] = useState(null);
  const [thirdSide, setThirdSide] = useState(null);
  const [isATriangle, setIsATriangle] = useState(false);
  const [isNotATriangle, setIsNotATriangle] = useState(false);

  const calculate = (e) => {
    e.preventDefault();
    let firstAndSecondSide = parseInt(firstSide) + parseInt(secondSide);
    let firstAndThirdSide = parseInt(firstSide) + parseInt(thirdSide);
    let secondAndThirdSide = parseInt(secondSide) + parseInt(thirdSide);
    if (
      firstSide < secondAndThirdSide &&
      secondSide < firstAndThirdSide &&
      thirdSide < firstAndSecondSide
    ) {
      setIsATriangle(true);
      setIsNotATriangle(false);
    } else {
      setIsNotATriangle(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsATriangle(false);
      setIsNotATriangle(false);
    }, 4000);
  }, [isATriangle, isNotATriangle]);

  return (
    <StyledSection>
      <header>
        <h1>Triangle Checker</h1>
      </header>
      <StyledRules>Submit three lengths below and hit enter.</StyledRules>
      <StyledRules>
        If those three lengths can come together to form a valid triangle a
        message will come up in green
      </StyledRules>
      <StyledRules>
        Otherwise those lengths do not form a valid triangle and a red message
        will pop up
      </StyledRules>
      <StyledRules>
        Although you don't need to enter any units, all lengths entered must be
        of the same unit
      </StyledRules>
      <form onSubmit={calculate}>
        <StyledInput
          type="number"
          onChange={(e) => setFirstSide(e.target.value)}
        />
        <StyledInput
          type="number"
          onChange={(e) => setSecondSide(e.target.value)}
        />
        <StyledInput
          type="number"
          onChange={(e) => setThirdSide(e.target.value)}
        />
        <StyledButton type="submit">Calculate</StyledButton>
      </form>
      {isATriangle ? (
        <StyledWinP>YEAH! THAT MAKES A TRIANGLE</StyledWinP>
      ) : null}
      {isNotATriangle ? (
        <StyledLoseP>SORRY! THAT DOES NOT MAKE A TRIANGLE</StyledLoseP>
      ) : null}
    </StyledSection>
  );
};

export default TriangleChecker;

const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledRules = styled.p`
  font-size: 20px;
`;

const StyledInput = styled.input`
  height: 30px;
  width: 125px;
  font-size: 24px;
  border: none;
  border-radius: 125px;
  margin: 5px;
  padding-left: 8px;
  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  height: 30px;
  width: 125px;
  font-size: 22px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  &:active {
    transform: scale(0.95, 0.95);
  }
  &:focus {
    outline: none;
  }
`;

const StyledWinP = styled.p`
  color: green;
  font-size: 33px;
`;

const StyledLoseP = styled.p`
  color: red;
  font-size: 33px;
`;
