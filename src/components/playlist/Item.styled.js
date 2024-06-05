import styled from "styled-components";

export const Title = styled.h3`
  font-size: 14px;
  opacity: 0.7;
  font-weight: 500;
`;

export const Owner = styled.h4`
  font-size: 12px;
  opacity: 0.5;
  font-weight: 500;
`;

export const Thumbnail = styled.div`
  position: relative;
  padding-top: 100%;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
`;

export const ThumbnailOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.primary};
  opacity: 0;
  transition: 0.2s ease-in-out all;
  -webkit-transition: 0.2s ease-in-out all;
`;

export const Detail = styled.div`
  padding: 10px 0;
`;

export const ItemContainer = styled.div`
  margin: 5px 0 0;
  overflow: hidden;
  color: #fff;
  &:hover ${ThumbnailOverlay} {
    opacity: 0.5;
  }
`;