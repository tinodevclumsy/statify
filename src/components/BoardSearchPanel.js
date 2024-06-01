import React from "react";
import styled from "styled-components";
import { searchItems } from "../api/SpotifyAPI";
import InputSearch from "../components/common/InputSearch";

const Panel = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.secondary};
  width: 350px;
  height: 100vh;
  padding: 15px;
  z-index: 1;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
  transition: 0.2s ease-in-out all;
  -webkit-transition: 0.2s ease-in-out all;
`;

const BoardSearchPanel = ({ open }) => {
  const onSearch = (str) => {
    searchItems(str);
  };

  return (
    <Panel open={open}>
      <InputSearch onSearch={onSearch} />
    </Panel>
  );
};

export default BoardSearchPanel;
