import React, { useContext } from "react";
import TrackListItem from "./Item";
import AlbumContext from "../../context/AlbumContext";
import { TableHeader, TableRow } from "../common/Table";
import CheckBox from "../common/Checkbox";
import Pagination from "../common/Pagination";
import usePagination from "../../hooks/usePagination";

const TrackList = ({ data, totalCount }) => {
  const { albums, setAlbums } = useContext(AlbumContext);
  const { page, goToPage, totalPages } = usePagination({
    totalCount: data.length,
    perPage: 10,
  });

  const paginatedTracks = () => {
    return data.slice(page * 10, (page + 1) * 10);
  };

  const onSelectAll = (e) => {
    if (e.target.checked) {
      setAlbums(data.map((ele) => ele[1]));
      return;
    }

    setAlbums([]);
  };

  const checkAll = () => {
    return albums.length === data.length;
  };

  return (
    <div>
      <table style={{ width: "100%" }}>
        <thead>
          <TableRow>
            <TableHeader style={{ textAlign: "center" }}>
              <CheckBox checked={checkAll()} onChange={onSelectAll} />
            </TableHeader>
            <TableHeader></TableHeader>
            <TableHeader>Name & Track - Artists</TableHeader>
            <TableHeader></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {data &&
            paginatedTracks().map(([id, value]) => {
              return <TrackListItem key={`album-${id}`} item={value} />;
            })}
        </tbody>
      </table>

      <Pagination
        totalPages={totalPages}
        onPageChange={(index) => goToPage(index)}
        currentPage={page}
      />
    </div>
  );
};

export default TrackList;
