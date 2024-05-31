import React, { useContext } from "react";
import TrackListItem from "./TrackListItem";
import styled from "styled-components";
import AlbumContext from "../context/AlbumContext";

const TableHeader = styled.th`
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  font-weight: 400;
  padding: 15px 10px;
  text-align: left;
`;

const CheckBox = styled.input`
  accent-color: ${(props) => props.theme.primary};
  width: 18px;
  height: 18px;
`;

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
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <TableHeader style={{ textAlign: "center" }}>
            <CheckBox
              type="checkbox"
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
            return (
              <TrackListItem
                key={`album-${id}`}
                item={value}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default TrackList;
