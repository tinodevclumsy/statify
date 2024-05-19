import React, { useEffect, useState } from "react";
import { getProfile, getPlaylists } from "../api/SpotifyAPI";
import { refreshToken } from "../api/AuthAPI";
import ProfileCard from "../components/ProfileCard";
import PlayList from "../components/PlayList";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  max-width: 1280px;
  padding: 0 15px;
  margin: 100px auto;
`;

const Home = () => {
  const [user, setUser] = useState();
  const [playlist, setPlayList] = useState({});
  const navigate = useNavigate();

  const handleToken = () => {
    refreshToken().then((res) => {
      if (res) {
        getProfile().then((res) => {
          setUser(res);
        });
        getPlaylists().then((res) => {
          setPlayList(res);
        });
      }
    });
  };

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/login");
    } else {
      getProfile()
        .then((res) => {
          setUser(res);
          getPlaylists().then((res) => {
            setPlayList(res);
          });
        })
        .catch((e) => {
          if (e.response.status === 401) {
            handleToken();
          }
        });
    }
  }, []);

  return (
    <Container>
      {user && (
        <ProfileCard
          username={user.display_name}
          profile_image={user.images[1].url}
          uri={user.uri}
        />
      )}

      <PlayList data={playlist} />
    </Container>
  );
};

export default Home;
