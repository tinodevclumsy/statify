import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import ProfileContext from "../context/ProfileContext";
import LogoImage from "../assets/Logo.png";

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
  height: 75px;
  background-color: ${(props) =>
    props.sticky ? props.theme.dark : "transparent"};
  transition: 0.2s ease-in-out all;
  -webkit-transition: 0.2s ease-in-out all;
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

const Logo = styled.div`
  width: 100px;
  display: flex;
`;

const TheHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const profile = useContext(ProfileContext);

  const navigate = useNavigate();

  function onSignOut() {
    navigate("/login");
    localStorage.removeItem("access_token");
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer sticky={isScrolled}>
      <Link to="/">
        <Logo>
          <img src={LogoImage} alt="Logo" />
        </Logo>
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
