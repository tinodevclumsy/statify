import styled from "styled-components";

export const PanelContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(props) =>
    props.open ? "rgba(0,0,0,.6)" : "transparent"};
  z-index: ${(props) => (props.open ? 1 : -1)};
`;

export const Panel = styled.div`
  background-color: ${(props) => props.theme.black};
  width: 90%;
  max-width: 450px;
  height: 100%;
  padding: 15px;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
  transition: 0.2s ease-in-out all;
  -webkit-transition: 0.2s ease-in-out all;
`;

export const ResultContainer = styled.div`
  height: calc(100% - 65px);
  overflow: auto;
  margin-top: 15px;
`