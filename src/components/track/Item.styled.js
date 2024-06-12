import styled from "styled-components";

export const Thumbnail = styled.div`
  width: 85px;
  height: 85px;
`;

export const Title = styled.h4`
  color: ${(props) => props.theme.white};
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ThumbnailCell = styled.td`
  width: 85px;
`;

export const TrackName = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
