import React, { useContext } from "react";
import styled from "styled-components";
import AlbumContext from "../context/AlbumContext";

const Thumbnail = styled.div`
  width: 85px;
  height: 85px;
`;

const Title = styled.h4`
  color: #fff;
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
  const { albums, setAlbums } = useContext(AlbumContext);

  const { name, thumbnail, tracks } = item;

  const getArists = (artists) => {
    return artists.map((ele) => ele.name);
  };

  const onAlbumCheck = (e) => {
    if(e.target.checked) {
      if(!albums.some(ele => ele.id === item.id)) {
        setAlbums([...albums, item]);
      }
      return
    }
    setAlbums(albums.filter(ele => ele.id !== item.id))
  };

  return (
    <>
      <ListRow onClick={() => onTrackClick(thumbnail[0].url)}>
        <ListCell style={{ textAlign: "center" }}>
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
