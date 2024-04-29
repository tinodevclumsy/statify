import React from "react";
import styled from "styled-components";

const BoardContainer = styled.div`
  width: 900px;
  height: 900px;
  background-color: red;
  display: flex;
  flex-wrap: wrap;
`;

const BoardItem = styled.div`
  width: 300px;
  height: 300px;
`;

const Board = (items) => {
  return (
    <BoardContainer>
      {items.map((item) => {
        return (
          <BoardItem>
            <img src={item} />
          </BoardItem>
        );
      })}
    </BoardContainer>
  );
};

export default Board;
