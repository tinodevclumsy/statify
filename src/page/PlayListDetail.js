import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

import PlayListCard from "../components/playlist/Card";
import TrackList from "../components/track/List";
import { LinkButton } from "../components/common/Button";
import InputSearch from "../components/common/InputSearch";

import usePlaylist from "../hooks/usePlaylist";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(15px) brightness(0.3);
  -webkit-filter: blur(15px) brightness(0.3);
  background-position: center;
  background-size: cover;
`;

const ListNav = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px 0;
`;

const PlayListDetail = () => {
  const { id } = useParams();
  const [term, setTerm] = useState("");
  const { playlistDetail, tracks, fetchPlaylistDetail, filterTracks } =
    usePlaylist();

  useEffect(() => {
    fetchPlaylistDetail(id);
  }, [id]);

  return (
    <>
      {playlistDetail && (
        <>
          <PlayListCard
            name={playlistDetail.name}
            thumbnail={playlistDetail.thumbnail}
            owner={playlistDetail.owner}
            total={{ album: tracks.length, track: playlistDetail.total }}
          />
          <div style={{ textAlign: "center", padding: "20px" }}>
            <LinkButton>
              <Link to={"/board"}>Create a Board</Link>
            </LinkButton>
          </div>
          <ListNav>
            <InputSearch onSearch={setTerm} />
          </ListNav>
          <TrackList data={filterTracks(term)} totalCount={tracks.length}  />
          <Background
            style={{ backgroundImage: `url(${playlistDetail.thumbnail})` }}
          />
        </>
      )}
    </>
  );
};

export default PlayListDetail;
