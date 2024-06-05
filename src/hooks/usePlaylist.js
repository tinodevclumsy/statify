import { useState } from "react";
import { getPlaylists, getPlayListDetail } from "../api/SpotifyAPI";

const usePlaylist = () => {
  const [playlist, setPlayList] = useState({});
  const [playlistDetail, setPlaylistDetail] = useState({});
  const [tracks, setTracks] = useState([]);

  const groupByAlbum = (list) => {
    return list.reduce((arr, crr) => {
      const id = crr.track.album.id;
      const data = arr.get(id);
      const track = { name: crr.track.name, artists: crr.track.artists };
      const thumbnail = crr.track.album.images;

      if (!data) {
        arr.set(id, {
          id,
          name: crr.track.album.name,
          thumbnail,
          tracks: [track],
        });
      } else {
        data.tracks.push(track);
      }

      return arr;
    }, new Map());
  };

  const fetchPlaylist = () => {
    getPlaylists()
      .then((res) => {
        setPlayList(res);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const fetchPlaylistDetail = (id) => {
    getPlayListDetail(id)
      .then((res) => {
        const cardData = {
          name: res.name,
          thumbnail: res.images.length && res.images[0].url,
          owner: res.owner.display_name,
          total: res.tracks.total,
        };
        setPlaylistDetail(cardData);

        const groupedTracks = groupByAlbum(res.tracks.items);
        setTracks([...groupedTracks]);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const filterTracks = (search) => {
    if (search) {
      const filtered = tracks.filter((ele) => {
        if (
          ele[1].name.toLowerCase().includes(search.toLowerCase()) ||
          ele[1].tracks.filter((ele) =>
            ele.name.toLowerCase().includes(search.toLowerCase())
          ).length
        ) {
          return true;
        }
        return false;
      });

      return filtered;
    }

    return tracks;
  };

  return {
    playlist,
    playlistDetail,
    tracks,
    filterTracks,
    fetchPlaylist,
    fetchPlaylistDetail,
  };
};

export default usePlaylist;
