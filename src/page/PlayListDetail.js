import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlayListDetail } from "../api/SpotifyAPI";
import PlayListCard from "../components/PlayListCard";
import TrackList from "../components/TrackList";
import styled from "styled-components";
import LinkButton from "../components/common/Link";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 1280px;
  padding: 0 15px;
  margin: 100px auto;
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

const ListNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
`;

const PlayListDetail = () => {
  const { id } = useParams();
  const NUM_PER_PAGE = 10;

  const [detail, setDetail] = useState();
  const [group, setGroup] = useState();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    getPlayListDetail({ id }).then((res) => {
      setDetail(res);
      setGroup([...groupAlbums(res.tracks.items)]);
    });
  }, [id]);

  function groupAlbums(tracks) {
    return tracks.reduce((arr, crr) => {
      const id = crr.track.album.id;
      const data = arr.get(id);
      const track = { name: crr.track.name, artists: crr.track.artists };
      const thumbnail = crr.track.album.images;

      if (!data) {
        arr.set(id, {
          id,
          name: crr.track.album.name,
          thumbnail,
          tracks: [track],
        });
      } else {
        data.tracks.push(track);
      }

      return arr;
    }, new Map());
  }

  function filterAlbums() {
    if (search) {
      const filtered = group.filter((ele) => {
        if (
          ele[1].name.toLowerCase().includes(search.toLowerCase()) ||
          ele[1].tracks.filter((ele) =>
            ele.name.toLowerCase().includes(search.toLowerCase())
          ).length
        ) {
          return true;
        }
        return false;
      });

      return filtered.slice(page, page + NUM_PER_PAGE);
    }

    return group.slice(page, page + NUM_PER_PAGE);
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
            <LinkButton>
              <Link to={"/board"}>Create a Board</Link>
            </LinkButton>
          </div>
          <ListNav>
            <p style={{ color: "#fff" }}>
              Total Albums: {group.length} / Total Tracks: {detail.tracks.total}
            </p>
            <input onChange={(e) => setSearch(e.target.value)} />
          </ListNav>
          <TrackList data={filterAlbums()} onTrackClick={() => {}} />
          <Background
            style={{ backgroundImage: `url(${detail.images[0].url})` }}
          />
        </>
      )}
    </Container>
  );
};

export default PlayListDetail;
