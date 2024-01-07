import styled from "styled-components";

const LinkButton = styled.a`
  width: 175px;
  border: 1px solid ${(props) => props.theme.primary};
  padding: 15px;
  border-radius: 35px;
  color: ${(props) => props.theme.primary};
`;

export default LinkButton;
