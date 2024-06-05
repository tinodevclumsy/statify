import React, { useEffect } from "react";
import ProfileCard from "../components/profile/Card";
import PlayList from "../components/playlist/List";
import usePlaylist from "../hooks/usePlaylist";

const Home = () => {
  const { fetchPlaylist, playlist } = usePlaylist();

  useEffect(() => {
    fetchPlaylist();
  }, []);

  return (
    <>
      <ProfileCard />
      <PlayList data={playlist} />
    </>
  );
};

export default Home;
