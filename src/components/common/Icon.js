import styled from "styled-components";

const IconContainer = styled.div`
  width: 35px;
  height: 35px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.dark};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export default IconContainer;
