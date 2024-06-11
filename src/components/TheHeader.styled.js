import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 1;
  padding: 5px 15px;
  height: 75px;
  background-color: ${(props) =>
    props.$sticky === 'true' ? props.theme.dark : "transparent"};
  transition: 0.2s ease-in-out all;
  -webkit-transition: 0.2s ease-in-out all;
`;

export const SignOutButton = styled.button`
  width: 100px;
  border: 1px solid #1db954;
  padding: 5px 15px;
  border-radius: 35px;
  color: #1db954;
  text-align: center;
  background: transparent;
  font-weight: 500;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  margin-right: 10px;
`;

export const ProfileImage = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Logo = styled.div`
  width: 100px;
  display: flex;
`;
