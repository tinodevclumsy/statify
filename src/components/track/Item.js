import React, { useContext } from "react";
import AlbumContext from "../../context/AlbumContext";
import { MoreVertical } from "react-feather";
import {
  Thumbnail,
  Title,
  ListRow,
  ThumbnailCell,
  ListCell,
  TrackCell,
} from "./Item.styled";
import CheckBox from "../common/Checkbox";

const TrackListItem = ({ item, onTrackClick }) => {
  const { albums, setAlbums } = useContext(AlbumContext);

  const { id, name, thumbnail, tracks } = item;

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

  const checkSelected = (id) => {
    return albums.some((ele) => ele.id === id);
  };

  return (
    <>
      <ListRow>
        <ListCell style={{ textAlign: "center", width: "65px" }}>
          <CheckBox checked={checkSelected(id)} onChange={onAlbumCheck} />
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
