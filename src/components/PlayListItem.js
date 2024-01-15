import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h3`
  font-size: 20px;
  opacity: 0.7;
`;

const Thumbnail = styled.div`
  position: relative;
  background-color: red;
`;

const ThumbnailOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.primary};
  opacity: 0;
  transition: 0.2s ease-in-out all;
  -webkit-transition: 0.2s ease-in-out all;
`;

const Detail = styled.div`
  padding: 10px;
`;

const ItemContainer = styled.div`
  background-color: ${(props) => props.theme.dark};
  margin: 5px 0;
  color: #fff;
  &:hover ${ThumbnailOverlay} {
    opacity: 0.5;
  }
`;

const PlayListItem = ({ item }) => {
  return (
    <Link to={`/playlist/${item.id}`}>
      <ItemContainer>
        <Thumbnail>
          {item.images.length && <img src={item.images[0].url} />}
          <ThumbnailOverlay />
        </Thumbnail>
        <Detail>
          <Title>{item.name}</Title>
        </Detail>
      </ItemContainer>
    </Link>
  );
};

export default PlayListItem;
