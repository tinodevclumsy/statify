import React from "react";
import PlayListItem from "./PlayListItem";
import styled from "styled-components";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
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
