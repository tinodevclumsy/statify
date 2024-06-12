import React, { useContext } from "react";
import AlbumContext from "../../context/AlbumContext";
import { MoreVertical } from "react-feather";
import { TableRow, TableCol, TrackCol } from "../common/Table";
import {
  Thumbnail,
  Title,
  ThumbnailCell,
  TrackName,
} from "./Item.styled";
import CheckBox from "../common/Checkbox";
import useAlbum from "../../hooks/useAlbum";

const TrackListItem = ({ item }) => {
  const { albums, setAlbums } = useContext(AlbumContext);
  const { getArtists } = useAlbum();
  const { id, name, thumbnail, tracks } = item;

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
      <TableRow>
        <TableCol style={{ textAlign: "center", width: "65px" }}>
          <CheckBox checked={checkSelected(id)} onChange={onAlbumCheck} />
        </TableCol>
        <ThumbnailCell>
          <Thumbnail>
            <img
              alt={`Album-${name}`}
              src={thumbnail.length && thumbnail[0].url}
            />
          </Thumbnail>
        </ThumbnailCell>
        <TableCol>
          <Title>{name}</Title>
        </TableCol>
        <TableCol style={{ textAlign: "center", width: "15px" }}>
          {/* <MoreVertical /> */}
        </TableCol>
      </TableRow>
      {tracks.map((track, key) => {
        return (
          <TableRow key={`track-${name}-${key}`}>
            <TrackCol></TrackCol>
            <TrackCol></TrackCol>
            <TrackCol>
              <TrackName>
                #{++key}. {track.name} - {getArtists(track.artists)}
              </TrackName>
            </TrackCol>
            <TrackCol></TrackCol>
          </TableRow>
        );
      })}
    </>
  );
};

export default TrackListItem;
