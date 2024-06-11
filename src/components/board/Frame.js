import { useEffect, useContext, useState, forwardRef } from "react";
import { BoardFrame, BoardCell } from "./Frame.styled";
import AlbumContext from "../../context/AlbumContext";

const Frame = forwardRef(({ onFrameEvent, selected }, ref) => {
  const { albums, setAlbums } = useContext(AlbumContext);
  const [swapIndex, setSwapIndex] = useState(-1);

  useEffect(() => {
    const selected = albums.length;

    if (selected < 42) {
      setAlbums(albums.concat(Array(42 - selected).fill(null)));
    }

    // clean up
    return () => {
      setAlbums([]);
    };
  }, []);

  const handleDragStart = (index) => {
    setSwapIndex(index);
  };

  const handleDrop = (e, index) => {
    e.stopPropagation();
    e.preventDefault();

    swapAlbums(swapIndex, index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    return false;
  };

  const swapAlbums = (start, end) => {
    const copied = [...albums];
    const temp = copied[start];
    copied[start] = copied[end];
    copied[end] = temp;

    onFrameEvent("swap", end);

    setAlbums(copied);
  };

  const getColumns = (index) => {
    if (index < 10) {
      return 5;
    } else if (index < 22) {
      return 6;
    }

    return 10;
  };

  return (
    <BoardFrame ref={ref}>
      {albums.map((item, key) => {
        return (
          <BoardCell
            selected={key === selected && "selected"}
            $col={getColumns(key)}
            $spacing={(getColumns(key) - 1) * 10}
            key={item ? item.name : `blank-${key}`}
            draggable={true}
            onDragStart={() => handleDragStart(key)}
            onDrop={(e) => handleDrop(e, key)}
            onDragOver={handleDragOver}
            style={item && { background: `url(${item.thumbnail[0].url})` }}
            onClick={() => onFrameEvent("click", key)}
          ></BoardCell>
        );
      })}
    </BoardFrame>
  );
});

export default Frame;
