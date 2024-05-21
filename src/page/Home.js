import React, { useEffect, useState } from "react";
import { getPlaylists } from "../api/SpotifyAPI";
import ProfileCard from "../components/ProfileCard";
import PlayList from "../components/PlayList";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1280px;
  padding: 0 15px;
  margin: 100px auto;
`;

const Home = () => {
  const [playlist, setPlayList] = useState({});

  useEffect(() => {
    getPlaylists().then((res) => {
      setPlayList(res);
    });
  }, []);

  return (
    <Container>
      <ProfileCard />

      <PlayList data={playlist} />
    </Container>
  );
};

export default Home;
