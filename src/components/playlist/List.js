import React from "react";
import PlayListItem from "./Item";
import styled from "styled-components";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PlayList = ({ data }) => {
  return (
    <ListContainer>
      {data.items &&
        data.items.map((item, index) => {
          return <PlayListItem item={item} key={`playlist-${index}`} />;
        })}
    </ListContainer>
  );
};

export default PlayList;
