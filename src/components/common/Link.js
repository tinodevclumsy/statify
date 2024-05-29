import styled from "styled-components";

const LinkButton = styled.span`
  display: inline-block;
  width: 175px;
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.primary};
  padding: 10px 15px;
  border-radius: 35px;
  color: ${(props) => props.theme.primary};
  text-align: center;
`;

export default LinkButton;
