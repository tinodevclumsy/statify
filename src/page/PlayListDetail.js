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
  // const boardRef = useRef(null);

  const [detail, setDetail] = useState();
  // const [board, setBoard] = useState([]);

  useEffect(() => {
    getPlayListDetail({ id }).then((res) => {
      console.log(res);
      setDetail(res);
    });
  }, []);

  // const onTrackClick = (item) => {
  //   setBoard((prevItems) => [...prevItems, item]);
  // };

  return (
    <Container>
      {detail && (
        <>
          <PlayListCard
            name={detail.name}
            thumbnail={detail.images.length && detail.images[0].url}
            owner={detail.owner.display_name}
          ></PlayListCard>
          <div style={{ textAlign: "center", padding: '20px' }}>
            <LinkButton>Create a Board</LinkButton>
          </div>
          <TrackList data={detail.tracks.items} onTrackClick={() => {}} />
          <Background
            style={{ backgroundImage: `url(${detail.images[0].url})` }}
          />
        </>
      )}
    </Container>
  );
};

export default PlayListDetail;
