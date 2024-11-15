import styled from "styled-components";

export const Card = styled.div`
  background-image: linear-gradient(
    ${(props) => props.theme.grey},
    ${(props) => props.theme.dark}
  );
  padding: 30px;
  border-radius: ${(props) => props.theme.cardRadius};
  text-align: center;
  color: ${(props) => props.theme.white};
`;

export const ProfileImage = styled.div`
  overflow: hidden;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin: auto;
`;

export const UserName = styled.h2`
  color: ${(props) => props.theme.white};
  margin: 10px 0;
`;
