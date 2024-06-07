import React, { useState } from "react";
import styled from "styled-components";

import SearchPanel from "../components/board/SearchPanel";
import Nav from "../components/board/Nav";
import Frame from "../components/board/Frame";

const Container = styled.div`
  width: 100%;
  margin: 75px auto 0;
  min-height: calc(100vh - 75px);
  max-width: 800px;
  padding: 0 10px;
`;

const Board = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [selectedIndex, setSeletectIndex] = useState(-1);

  const onFrameEvent = (type, index) => {
    if (type === "click") {
      setToggleSearch(true);
    }

    setSeletectIndex(index);
  };

  return (
    <>
      <SearchPanel
        index={selectedIndex}
        onPanelClick={() => setToggleSearch(false)}
        open={toggleSearch}
      />
      <Container>
        <Nav onToggleSearch={(val) => setToggleSearch(val)} />
        <Frame selected={selectedIndex} onFrameEvent={onFrameEvent} />
      </Container>
    </>
  );
};

export default Board;
