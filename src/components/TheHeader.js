import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 1;
  padding: 5px 15px;
  background-color: ${(props) => props.theme.dark};
  height: 75px;
`;

const Title = styled.h2`
  color: #fff;
  text-transform: uppercase;
`;

const SignOutButton = styled.button`
  width: 100px;
  border: 1px solid #1db954;
  padding: 5px 15px;
  border-radius: 35px;
  color: #1db954;
  text-align: center;
  background: transparent;
  font-weight: 500;
`;

const TheHeader = () => {
  return (
    <HeaderContainer>
      <Title>Statify</Title>

      <div>
        <SignOutButton>Sign Out</SignOutButton>
      </div>
    </HeaderContainer>
  );
};

export default TheHeader;
