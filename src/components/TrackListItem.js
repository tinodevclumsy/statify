import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  width: 150px;
  height: 150px;
`;

const Title = styled.h4`
  color: #fff;
`;

const Artist = styled.h5`
  color: #fff;
  opacity: 0.6;
`;

const Album = styled.h5`
  color: #fff;
  opacity: 0.6;
`;

const ListRow = styled.tr`
  background-color: rgba(0, 0, 0, 0.4);
`;

const ThumbnailCell = styled.td`
  width: 150px;
`;

const ListCell = styled.td`
  padding: 15px;
`;

const TrackListItem = ({ track, onTrackClick }) => {
  const { album, artists, name } = track;

  const getArists = () => {
    return artists.map((ele) => ele.name);
  };

  return (
    <ListRow onClick={() => onTrackClick(album.images[0].url)}>
      <ThumbnailCell>
        <Thumbnail>
          <img src={album.images.length && album.images[0].url} />
        </Thumbnail>
      </ThumbnailCell>
      <ListCell>
        <Title>{name}</Title>
        <Artist>{getArists()}</Artist>
      </ListCell>
      <ListCell>
        <Album>{album.name}</Album>
      </ListCell>
      {/* <ListCell>Action</ListCell> */}
    </ListRow>
  );
};

export default TrackListItem;
