import styled from "styled-components";

export const Card = styled.div`
  background-image: linear-gradient(
    ${(props) => props.theme.grey},
    ${(props) => props.theme.dark}
  );
  width: 100%;
  padding: 30px;
  border-radius: 13px;
  text-align: center;
  color: #fff;
`;

export const ProfileImage = styled.div`
  overflow: hidden;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  margin: auto;
`;

export const UserName = styled.h2`
  margin: 10px 0;
`;
