import React from "react";
import { Link } from "react-router-dom";
import {Title, Owner, Thumbnail, ThumbnailOverlay, Detail, ItemContainer} from './Item.styled'

const PlayListItem = ({ item }) => {
  return (
    <Link to={`/playlist/${item.id}`}>
      <ItemContainer>
        <Thumbnail
          style={{
            background: `url(${item.images.length && item.images[0].url})`,
          }}
        >
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
