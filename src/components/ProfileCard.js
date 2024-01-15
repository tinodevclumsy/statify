import React from "react";
import styled from "styled-components";
import LinkButton from "./common/Link";

const Card = styled.div`
  background-color: ${(props) => props.theme.dark};
  width: 100%;
  padding: 30px;
  border-radius: 13px;
  text-align: center;
  color: #fff;
`;

const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: auto;
`;

const UserName = styled.h2`
  margin: 10px 0;
`;

const ProfileCard = ({ profile_image, username, uri }) => {
  return (
    <Card>
      <ProfileImage>
        <img src={profile_image} alt="User Profile" />
      </ProfileImage>
      <UserName>{username}</UserName>
      <LinkButton href={uri} target="_blank">
        View on Spotify
      </LinkButton>
    </Card>
  );
};

export default ProfileCard;
