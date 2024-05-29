import { createContext } from "react";

const AlbumContext = createContext({
  albums: [],
  setAlbums: () => {},
});

export default AlbumContext;