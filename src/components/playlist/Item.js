import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h3`
  font-size: 14px;
  opacity: 0.7;
  font-weight: 500;
`;

const Owner = styled.h4`
  font-size: 12px;
  opacity: 0.5;
  font-weight: 500;
`;

const Thumbnail = styled.div`
  position: relative;
  padding-top: 100%;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
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
  padding: 10px 0;
`;

const ItemContainer = styled.div`
  margin: 5px 0 0;
  overflow: hidden;
  color: #fff;
  &:hover ${ThumbnailOverlay} {
    opacity: 0.5;
  }
`;

const PlayListItem = ({ item }) => {
  return (
    <Link to={`/playlist/${item.id}`}>
      <ItemContainer>
        <Thumbnail
          style={{
            background: `url(${item.images.length && item.images[0].url})`,
          }}
        >
          {/* {item.images.length && <img src={item.images[0].url} />} */}
          <ThumbnailOverlay />
        </Thumbnail>
        <Detail>
          <Title>{item.name}</Title>
          <Owner>By {item.owner.display_name}</Owner>
        </Detail>
      </ItemContainer>
    </Link>
  );
};

export default PlayListItem;
