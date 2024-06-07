import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileContext from "../context/ProfileContext";
import LogoImage from "../assets/Logo.png";
import {
  HeaderContainer,
  SignOutButton,
  Nav,
  Profile,
  ProfileImage,
  Logo,
} from "./TheHeader.styled";

const TheHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const profile = useContext(ProfileContext);

  const navigate = useNavigate();

  const onSignOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/login");
  };

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
    <HeaderContainer sticky={isScrolled ? "sticky" : "fixed"}>
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
