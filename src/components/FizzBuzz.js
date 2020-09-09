import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FizzBuzz = () => {
  const [numbers, setNumbers] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    fizzbuzzCalculation(modulus);
  });

  const fizzbuzzCalculation = (isDivisible) => {
    let result;
    for (let i = 1; i <= 100; i++) {
      result = "";
      if (isDivisible(i, 3) === 0) {
        result += "Fizz";
      }
      if (isDivisible(i, 5) === 0) {
        result += "Buzz";
      }
      if (result === "") {
        result += i;
      }
      numbers.push(result);
    }
    setDisplay(true);
  };

  const modulus = (currentNumber, divisibleBy) => {
    return currentNumber % divisibleBy;
  };

  return (
    <StyledSection>
      {display
        ? numbers.map((number, index) => {
            return (
              <StyledDiv>
                <StyledP key={index}>{number}</StyledP>
              </StyledDiv>
            );
          })
        : null}
    </StyledSection>
  );
};

export default FizzBuzz;

const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: blue;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 15px;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

const StyledP = styled.p`
  font-size: 24px;
`;
