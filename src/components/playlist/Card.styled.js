import styled from "styled-components";

export const Card = styled.div`
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

export const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 150px;
  height: 150px;
`;

export const PlayListName = styled.h2``;

export const OwnerName = styled.h4`
  margin: 10px 0 0;
  font-weight: 400;
`;

export const Detail = styled.div`
  padding: 0 15px;
`;