import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import ProfileContext from "../context/ProfileContext";

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

const Nav = styled.div`
  display: flex;
  align-items: center;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  margin-right: 10px;
`;

const ProfileImage = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
`;

const TheHeader = () => {
  const profile = useContext(ProfileContext);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("mounted", profile);
  }, [profile]);

  function onSignOut() {
    navigate("/login");
    localStorage.removeItem("access_token");
  }

  return (
    <HeaderContainer>
      <Link to="/">
        <Title>Statify</Title>
      </Link>

      <Nav>
        {profile && (
          <Profile>
            <ProfileImage>
              <img src={profile.images[1].url} alt="User Profile on Header" />
            </ProfileImage>
          </Profile>
        )}
        <SignOutButton onClick={onSignOut}>Sign Out</SignOutButton>
      </Nav>
    </HeaderContainer>
  );
};

export default TheHeader;
