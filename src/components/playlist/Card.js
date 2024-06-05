import React from "react";
import {
  Card,
  ProfileImage,
  PlayListName,
  OwnerName,
  Detail,
} from "./Card.styled";

const PlayListCard = ({ isPublic, thumbnail, name, owner }) => {
  return (
    <Card>
      <ProfileImage>
        <img src={thumbnail} alt="User Profile" />
      </ProfileImage>
      <Detail>
        <h5>{isPublic ? "Private" : "Public"} Playlist</h5>
        <PlayListName>{name}</PlayListName>
        <OwnerName>By {owner}</OwnerName>
      </Detail>
    </Card>
  );
};

export default PlayListCard;
