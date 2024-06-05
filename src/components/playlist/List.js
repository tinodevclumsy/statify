import React from "react";
import PlayListItem from "./Item";
import { ListContainer } from "./List.styled";

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
