import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import AlbumContext from "../context/AlbumContext";

const Nav = styled.div`
  margin-bottom: 35px;
`;

const Container = styled.div`
  max-width: 750px;
  margin: 100px auto;
`;

const BoardContainer = styled.div`
  /* display: grid;
  margin: auto;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  padding: 10px; */
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  background-color: ${(props) => props.theme.grey};
  padding: 10px;
`;

const PrimaryCell = styled.div`
  position: relative;
  width: calc((100% - ${(props) => props.spacing}px) / ${(props) => props.col});
  aspect-ratio: 1 / 1;
  background-color: ${(props) => props.theme.dark};
  background-size: cover !important;
  background-position: center !important;
  grid-column: span 6 / 5;
`;

const Board = () => {
  const { albums, setAlbums } = useContext(AlbumContext);

  useEffect(() => {
    const selected = albums.length;
    if (selected < 42) {
      setAlbums(albums.concat(Array(42 - selected).fill(null)));
    }

    // clean up
    return () => {
      setAlbums([]);
    };
  }, []);

  const getColumns = (index) => {
    if (index < 10) {
      return 5;
    } else if (index < 22) {
      return 6;
    }

    return 10;
  };

  return (
    <Container>
      <Nav>
        <input onChange={(e) => {}} />
      </Nav>
      <BoardContainer>
        {albums.map((item, key) => {
          return (
            <PrimaryCell
              col={getColumns(key)}
              spacing={(getColumns(key) - 1) * 10}
              key={item ? item.name : `blank-${key}`}
              style={item && { background: `url(${item.thumbnail[0].url})` }}
            >
              {/* <img src={item} /> */}
            </PrimaryCell>
          );
        })}
      </BoardContainer>
    </Container>
  );
};

export default Board;
