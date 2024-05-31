import React, { useContext } from "react";
import styled from "styled-components";
import AlbumContext from "../context/AlbumContext";
import { MoreVertical } from "react-feather";

const Thumbnail = styled.div`
  width: 85px;
  height: 85px;
`;

const Title = styled.h4`
  color: #F0F0F0;
`;

const ListRow = styled.tr`
  background-color: rgba(0, 0, 0, 0.4);
`;

const ThumbnailCell = styled.td`
  width: 85px;
`;

const CheckBox = styled.input`
  accent-color: ${(props) => props.theme.primary};
  width: 18px;
  height: 18px;
`;

const ListCell = styled.td`
  padding: 15px;
  color: #F0F0F0;
`;

const TrackCell = styled.td`
  color: #F0F0F0;
  padding: 15px;
  font-size: 13px;
  opacity: 0.8;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TrackListItem = ({ item, onTrackClick }) => {
  const { albums, setAlbums } = useContext(AlbumContext);

  const { name, thumbnail, tracks } = item;

  const getArists = (artists) => {
    return artists.map((ele) => ele.name);
  };

  const onAlbumCheck = (e) => {
    if (e.target.checked) {
      if (!albums.some((ele) => ele.id === item.id)) {
        setAlbums([...albums, item]);
      }
      return;
    }
    setAlbums(albums.filter((ele) => ele.id !== item.id));
  };

  return (
    <>
      <ListRow onClick={() => onTrackClick(thumbnail[0].url)}>
        <ListCell style={{ textAlign: "center", width: "65px" }}>
          <CheckBox type="checkbox" onChange={onAlbumCheck} />
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
        <ListCell style={{ textAlign: "center", width: "15px" }}>
          <MoreVertical />
        </ListCell>
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
