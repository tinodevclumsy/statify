import React from "react";
import styled from "styled-components";

const BoardContainer = styled.div`
  max-width: 750px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 10px;
  background-color: yellow;
`;

const PrimaryCell = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  background-color: red;
`;

const Board = () => {
  const items = Array(9).fill(0);
  return (
    <BoardContainer>
      {items.map((item) => {
        return <PrimaryCell>{/* <img src={item} /> */}</PrimaryCell>;
      })}
    </BoardContainer>
  );
};

export default Board;
