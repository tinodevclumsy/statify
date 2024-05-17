import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { getPlayListDetail } from "../api/SpotifyAPI";
import PlayListCard from "../components/PlayListCard";
import TrackList from "../components/TrackList";
import styled from "styled-components";
import LinkButton from "../components/common/Link";

const Container = styled.div`
  max-width: 1280px;
  padding: 0 15px;
  margin: 30px auto;
`;

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

const PlayListDetail = () => {
  const { id } = useParams();

  const [detail, setDetail] = useState();
  const [group, setGroup] = useState();

  useEffect(() => {
    getPlayListDetail({ id }).then((res) => {
      setDetail(res);
      setGroup([...filterTracks(res.tracks.items)]);
    });
  }, []);

  function filterTracks(tracks) {
    return tracks.reduce((arr, crr) => {
      const id = crr.track.album.id;
      const data = arr.get(id)
      const track = { name: crr.track.name, artists: crr.track.artists }
      const thumbnail = crr.track.album.images
      if(!data) {
        arr.set(id, {
          id,
          thumbnail,
          tracks: [track]
        })
      } else {
        data.tracks.push(track)
      }

      return arr
    }, new Map());
  }

  return (
    <Container>
      {detail && (
        <>
          <PlayListCard
            name={detail.name}
            thumbnail={detail.images.length && detail.images[0].url}
            owner={detail.owner.display_name}
          ></PlayListCard>
          <div style={{ textAlign: "center", padding: "20px" }}>
            <LinkButton>Create a Board</LinkButton>
          </div>
          <TrackList data={group} onTrackClick={() => {}} />
          <Background
            style={{ backgroundImage: `url(${detail.images[0].url})` }}
          />
        </>
      )}
    </Container>
  );
};

export default PlayListDetail;
