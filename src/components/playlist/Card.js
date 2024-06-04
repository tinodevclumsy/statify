import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  position: relative;
  background-image: linear-gradient(
    ${(props) => props.theme.grey},
    ${(props) => props.theme.dark}
  );
  width: 100%;
  padding: 30px;
  border-radius: 13px;
  color: #fff;
`;

const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 150px;
  height: 150px;
`;

const PlayListName = styled.h2``;

const OwnerName = styled.h4`
  margin: 10px 0 0;
  font-weight: 400;
`;

const Detail = styled.div`
  padding: 0 15px;
`;

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
