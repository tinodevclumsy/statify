import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  width: 150px;
  height: 150px;
`;

const Title = styled.h4`
  color: #fff;
`;

const ListRow = styled.tr`
  background-color: rgba(0, 0, 0, 0.4);
`;

const ThumbnailCell = styled.td`
  width: 150px;
`;

const CheckBox = styled.input`
  accent-color: ${(props) => props.theme.primary};
  width: 18px;
  height: 18px;
`;

const ListCell = styled.td`
  min-height: 150px;
  padding: 15px;
  color: #fff;
`;

const TrackCell = styled.td`
  color: #fff;
  padding: 15px;
  font-size: 13px;
  opacity: 0.8;
  font-weight: 500;
`;

const TrackListItem = ({ item, onTrackClick }) => {
  const { name, thumbnail, tracks } = item;

  const getArists = (artists) => {
    return artists.map((ele) => ele.name);
  };

  return (
    <>
      <ListRow onClick={() => onTrackClick(thumbnail[0].url)}>
        <ListCell style={{ textAlign: "center" }}>
          <CheckBox type="checkbox" />
        </ListCell>
        <ThumbnailCell>
          <Thumbnail>
            <img
              alt={`Album-${name}`}
              src={thumbnail.length && thumbnail[0].url}
            />
          </Thumbnail>
        </ThumbnailCell>
        <ListCell>
          <Title>{name}</Title>
        </ListCell>
        <ListCell style={{ textAlign: "center" }}>Action</ListCell>
      </ListRow>
      {tracks.map((track, key) => {
        return (
          <ListRow key={`track-${name}-${key}`}>
            <TrackCell></TrackCell>
            <TrackCell></TrackCell>
            <TrackCell>
              #{++key}. {track.name} - {getArists(track.artists)}
            </TrackCell>
            <TrackCell></TrackCell>
          </ListRow>
        );
      })}
    </>
  );
};

export default TrackListItem;
