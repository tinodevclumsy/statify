import React from "react";
import TrackListItem from "./TrackListItem";
import styled from "styled-components";

const TableHeader = styled.th`
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  font-weight: 400;
  padding: 15px 10px;
  text-align: left;
`;

const TrackList = ({ data, onTrackClick }) => {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <TableHeader></TableHeader>
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
                onTrackClick={onTrackClick}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default TrackList;
