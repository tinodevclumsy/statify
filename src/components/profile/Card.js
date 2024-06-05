import React, { useContext } from "react";
import LinkButton from "../common/Link";
import { Card, ProfileImage, UserName } from "./Card.styled";
import ProfileContext from "../../context/ProfileContext";

const ProfileCard = () => {
  const profile = useContext(ProfileContext);

  return (
    <>
      {profile && (
        <Card>
          <ProfileImage>
            <img src={profile.images[1].url} alt="User Profile" />
          </ProfileImage>
          <UserName>{profile.display_name}</UserName>
          <LinkButton href={profile.uri} target="_blank">
            View on Spotify
          </LinkButton>
        </Card>
      )}
    </>
  );
};

export default ProfileCard;
