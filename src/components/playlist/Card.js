import React from "react";
import {
  Card,
  ProfileImage,
  PlayListName,
  OwnerName,
  Detail,
  Type,
} from "./Card.styled";

const PlayListCard = ({ isPublic, thumbnail, name, owner, total }) => {
  return (
    <Card>
      <ProfileImage>
        <img src={thumbnail} alt="User Profile" />
      </ProfileImage>
      <Detail>
        <Type>{isPublic ? "Private" : "Public"} Playlist</Type>
        <PlayListName>{name}</PlayListName>
        <OwnerName>
          Total Albums: {total.album} / Total Tracks: {total.track}
        </OwnerName>
        <OwnerName>
          By {owner}
        </OwnerName>
      </Detail>
    </Card>
  );
};

export default PlayListCard;
