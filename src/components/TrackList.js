import React from "react";
import TrackListItem from "./TrackListItem";

const TrackList = ({ data }) => {
  return (
    <table style={{ width: "100%", marginTop: "20px" }}>
      <tbody>
        {data &&
          data.map((ele, key) => {
            return <TrackListItem key={`track-${key}`} track={ele.track} />;
          })}
      </tbody>
    </table>
  );
};

export default TrackList;
