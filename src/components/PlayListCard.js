import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
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

const PlayListName = styled.h2`
  /* margin: 10px 0; */
`;

const OwnerName = styled.h4`
  margin: 10px 0 0;
`;

const Detail = styled.div`
    padding: 0 15px;
`

const PlayListCard = ({ thumbnail, name, owner }) => {
  return (
    <Card>
      <ProfileImage>
        <img src={thumbnail} alt="User Profile" />
      </ProfileImage>
      <Detail>
        <PlayListName>{name}</PlayListName>
        <OwnerName>{owner}</OwnerName>
      </Detail>
    </Card>
  );
};

export default PlayListCard;
