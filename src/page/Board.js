import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AlbumContext from "../context/AlbumContext";

const Panel = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.grey};
  width: 350px;
  height: 100vh;
  z-index: 1;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
  transition: 0.2s ease-in-out all;
  -webkit-transition: 0.2s ease-in-out all;
`;

const Container = styled.div`
  width: 100%;
  margin: 75px auto 0;
  display: flex;
  min-height: calc(100vh - 75px);
  align-items: center;
`;

const BoardContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const Frame = styled.div`
  display: flex;
  max-width: 800px;
  margin: auto;
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

const Search = styled.input`
  width: 100%;
  padding: 10px;
`;

const Board = () => {
  const { albums, setAlbums } = useContext(AlbumContext);
  const [swapIndex, setSwapIndex] = useState(-1);
  const [panel, setPanel] = useState(false);

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

  const handleDragStart = (index) => {
    setSwapIndex(index);
  };

  const handleDrop = (e, index) => {
    e.stopPropagation();
    e.preventDefault();

    swapAlbums(swapIndex, index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    return false;
  };

  const swapAlbums = (start, end) => {
    const copied = [...albums];
    const temp = copied[start];
    copied[start] = copied[end];
    copied[end] = temp;

    setAlbums(copied);
  };

  const onCellClick = () => {
    setPanel(!panel);
  };

  return (
    <>
      <Panel open={panel}>
        <Search onChange={(e) => {}} />
      </Panel>
      <Container>
        <BoardContainer>
          <Frame>
            {albums.map((item, key) => {
              return (
                <PrimaryCell
                  col={getColumns(key)}
                  spacing={(getColumns(key) - 1) * 10}
                  key={item ? item.name : `blank-${key}`}
                  draggable={true}
                  onDragStart={() => handleDragStart(key)}
                  onDrop={(e) => handleDrop(e, key)}
                  onDragOver={handleDragOver}
                  style={
                    item && { background: `url(${item.thumbnail[0].url})` }
                  }
                  onClick={onCellClick}
                >
                  {/* <img src={item} /> */}
                </PrimaryCell>
              );
            })}
          </Frame>
        </BoardContainer>
      </Container>
    </>
  );
};

export default Board;
