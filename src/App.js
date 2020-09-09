import React from "react";
import FizzBuzz from "./components/FizzBuzz";
import TriangleChecker from "./components/TriangleChecker";
import styled from "styled-components";

function App() {
  return (
    <StyledDiv className="App">
      <FizzBuzz />
      <TriangleChecker />
    </StyledDiv>
  );
}

export default App;

const StyledDiv = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 200vh;
  width: 100vw;
`;
