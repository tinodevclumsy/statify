import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  font-size: 14px;
  background-color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: ${(props) => props.theme.buttonRadius};
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.dark};

  &:hover {
    transform: scale(1.05);
  }
`;

export const LinkButton = styled(Button)`
  width: 175px;
  padding: 10px 15px;
`;

export const SignOutButton = styled(Button)`
  width: 100px;
  padding: 5px 10px;
`;
