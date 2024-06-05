import React, { useContext } from "react";
import TrackListItem from "./Item";
import AlbumContext from "../../context/AlbumContext";
import { TableHeader } from "./List.styled";
import CheckBox from "../common/Checkbox";

const TrackList = ({ data }) => {
  const { albums, setAlbums } = useContext(AlbumContext);

  const onSelectAll = (e) => {
    if (e.target.checked) {
      setAlbums(data.map((ele) => ele[1]));
      return;
    }

    setAlbums([]);
  };

  const checkAll = () => {
    return albums.length === data.length;
  };

  return (
    <>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <TableHeader style={{ textAlign: "center" }}>
              <CheckBox
                checked={checkAll()}
                onChange={onSelectAll}
              />
            </TableHeader>
            <TableHeader></TableHeader>
            <TableHeader>Name & Track - Artists</TableHeader>
            <TableHeader></TableHeader>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map(([id, value]) => {
              return <TrackListItem key={`album-${id}`} item={value} />;
            })}
        </tbody>
      </table>
    </>
  );
};

export default TrackList;
