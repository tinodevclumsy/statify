import React, { useEffect } from "react";
import ProfileCard from "../components/profile/Card";
import PlayList from "../components/playlist/List";
import styled from "styled-components";
import usePlaylist from "../hooks/usePlaylist";

const Container = styled.div`
  max-width: 1280px;
  padding: 0 15px;
  margin: 100px auto;
`;

const Home = () => {
  const { fetchPlaylist, playlist } = usePlaylist();

  useEffect(() => {
    fetchPlaylist();
  }, []);

  return (
    <Container>
      <ProfileCard />

      <PlayList data={playlist} />
    </Container>
  );
};

export default Home;
