import styled from "styled-components";

export const ItemOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.grey};
  opacity: 0;
  transition: 0.1s ease-in-out all;
  -webkit-transition: 0.1s ease-in-out all;
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding-right: 10px;
  background-color: ${(props) => props.theme.dark};
  cursor: pointer;

  &:hover ${ItemOverlay} {
    opacity: .5;
  }
`;

export const Thumbnail = styled.div`
  width: 75px;
  min-width: 75px;
  height: 75px;
  background-color: red;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
`;

export const Detail = styled.div`
  width: 100%;
  padding: 10px;
`;

export const Title = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #f0f0f0;
  opacity: 0.8;
  font-weight: 500;
  font-size: 14px;
`;

export const Artist = styled(Title)`
  && {
    font-size: 12px;
    opacity: 0.5;
  }
`;
