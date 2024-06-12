// TODO: PAGINATION

import { useContext } from "react";
import InputSearch from "../common/InputSearch";
import { Panel, PanelContainer, ResultContainer } from "./SearchPanel.styled";
import useAlbum from "../../hooks/useAlbum";
import SearchItem from "./SearchItem";

import AlbumContext from "../../context/AlbumContext";

const SearchPanel = ({ index, open, onPanelClick }) => {
  const { searchAlbumAndTrack, searched, setSearched } = useAlbum();
  const { setAlbums } = useContext(AlbumContext);

  const closePanel = (e) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      onPanelClick();
    }
  };

  const onItemClick = (item, index) => {
    const album = item.type === "album" ? item : item.album;
    const data = {
      id: album.id,
      name: album.name,
      thumbnail: album.images,
    };

    setAlbums((prev) => {
      const cloned = [...prev];
      cloned[index] = data;
      return cloned;
    });

    onPanelClick();
    setSearched([])
  };

  return (
    <PanelContainer $open={open} onClick={closePanel}>
      <Panel $open={open}>
        <InputSearch onSearch={searchAlbumAndTrack} />
        <ResultContainer>
          {searched.map((item, key) => {
            return (
              <SearchItem
                item={item}
                key={`searched-${key}`}
                onClick={() => onItemClick(item, index)}
              />
            );
          })}
        </ResultContainer>
      </Panel>
    </PanelContainer>
  );
};

export default SearchPanel;
