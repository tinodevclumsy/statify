import styled from "styled-components";

export const BoardFrame = styled.div`
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  gap: 10px;
  background-color: ${(props) => props.theme.grey};
  padding: 10px;
`;

export const BoardCell = styled.div`
  position: relative;
  width: calc((100% - ${(props) => props.spacing}px) / ${(props) => props.col});
  aspect-ratio: 1 / 1;
  background-color: ${(props) => props.theme.dark};
  background-size: cover !important;
  background-position: center !important;
  grid-column: span 6 / 5;
  outline: 1px solid
    ${(props) => props.selected === "selected" && props.theme.secondary};
`;
