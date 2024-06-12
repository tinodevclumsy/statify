import styled from "styled-components";

export const TableRow = styled.tr`
  background-color: rgba(0, 0, 0, 0.4);
`;

export const TableCol = styled.td`
  color: ${(props) => props.theme.white};
  padding: 15px;
  font-weight: 500;
`;

export const TableHeader = styled(TableCol)`
  font-size: 14px;
  text-align: left;
`;

export const TrackCol = styled(TableCol)`
  font-size: 12px;
  opacity: 0.8;
`;
