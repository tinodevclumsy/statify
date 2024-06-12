import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-image: linear-gradient(
    ${(props) => props.theme.grey},
    ${(props) => props.theme.dark}
  );
  padding: 30px;
  border-radius: ${(props) => props.theme.cardRadius};
  color: ${(props) => props.theme.white};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.theme.grey};

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    margin-bottom: 20px;
  }
`;

export const Type = styled.h5`
  font-weight: 400;
`;

export const PlayListName = styled.h2`
  font-weight: 600;
  line-height: 1.3em;
  margin-bottom: 5px;
`;

export const OwnerName = styled.h5`
  font-weight: 400;
`;

export const Detail = styled.div`
  padding: 0 15px;
`;
