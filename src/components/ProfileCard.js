import React, { useContext } from "react";
import styled from "styled-components";
import LinkButton from "./common/Link";

import ProfileContext from "../context/ProfileContext";

const Card = styled.div`
  /* background-color: ${(props) => props.theme.dark}; */
  background-image: linear-gradient( ${(props) => props.theme.grey}, ${(props) => props.theme.dark});

  width: 100%;
  padding: 30px;
  border-radius: 13px;
  text-align: center;
  color: #fff;
`;

const ProfileImage = styled.div`
  overflow: hidden;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  margin: auto;
`;

const UserName = styled.h2`
  margin: 10px 0;
`;

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
