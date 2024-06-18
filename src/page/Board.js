import React, { useState, useRef } from "react";
import styled from "styled-components";

import SearchPanel from "../components/board/SearchPanel";
import Nav from "../components/board/Nav";
import Frame from "../components/board/Frame";
import { toPng } from "html-to-image";

const Container = styled.div`
  width: 100%;
  margin: 75px auto 0;
  min-height: calc(100vh - 75px);
  max-width: 800px;
  padding: 0 10px;
`;

const Board = () => {
  const boardRef = useRef(null);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [selectedIndex, setSeletectIndex] = useState(-1);

  const onDownload = () => {
    toPng(boardRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFrameEvent = (type, index) => {
    if (type === "click") {
      setToggleSearch(true);
    }

    setSeletectIndex(index);
  };

  const onCloasePanel = () => {
    setToggleSearch(false);
    setSeletectIndex(-1);
  };

  return (
    <>
      <SearchPanel
        index={selectedIndex}
        onPanelClick={onCloasePanel}
        open={toggleSearch}
      />
      <Container>
        <Nav
          onToggleSearch={(val) => setToggleSearch(val)}
          onDownload={onDownload}
        />
        <Frame
          ref={boardRef}
          selected={selectedIndex}
          onFrameEvent={onFrameEvent}
          onDragEnd={() => {
            setSeletectIndex(-1);
          }}
        />
      </Container>
    </>
  );
};

export default Board;
