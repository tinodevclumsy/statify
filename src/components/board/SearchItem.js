import {
  Item,
  ItemOverlay,
  Thumbnail,
  Detail,
  Title,
  Artist,
} from "./SearchItem.styled";
import useAlbum from "../../hooks/useAlbum";

const SearchItem = ({ item, onClick }) => {
  const { getArtists } = useAlbum();

  const getThumbnail = (item) => {
    if (item.type === "album" && item.images && item.images.length) {
      return item.images[0].url;
    }

    return (
      item.album.images && item.album.images.length && item.album.images[0].url
    );
  };

  return (
    <Item onClick={onClick}>
      <ItemOverlay />
      <Thumbnail
        style={{
          background: `url(${getThumbnail(item)})`,
        }}
      />
      <Detail>
        <Title>{item.name}</Title>
        <Artist>{getArtists(item.artists)}</Artist>
      </Detail>
    </Item>
  );
};

export default SearchItem;
