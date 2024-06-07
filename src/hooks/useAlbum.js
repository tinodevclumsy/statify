import { useState } from "react";
import { searchItems } from "../api/SpotifyAPI";

const useAlbum = () => {
  const [searched, setSearched] = useState([]);

  const searchAlbumAndTrack = (str) => {
    if (str) {
      searchItems(str).then((res) => {
        console.log([...res.albums.items.concat(res.tracks.items)]);
        setSearched([...res.albums.items.concat(res.tracks.items)]);
      });
    }
  };

  const getArtists = (artists) => {
    return artists.map((ele) => ele.name).join(', ');
  };

  return {
    searched,
    setSearched,
    searchAlbumAndTrack,
    getArtists,
  };
};

export default useAlbum;
