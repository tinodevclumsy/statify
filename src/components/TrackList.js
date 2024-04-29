import React from "react";
import TrackListItem from "./TrackListItem";

const TrackList = ({ data, onTrackClick }) => {
  return (
    <table style={{ width: "100%" }}>
      <tbody>
        {data &&
          data.map((ele, key) => {
            return <TrackListItem key={`track-${key}`} track={ele.track} onTrackClick={onTrackClick}/>;
          })}
      </tbody>
    </table>
  );
};

export default TrackList;
