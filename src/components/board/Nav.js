import { BoardNav } from "./Nav.styled";
import IconContainer from "../common/Icon";
import { Settings, Search, Download } from "react-feather";

const Nav = ({ onToggleSearch, onToggleOption, onDownload }) => {
  return (
    <BoardNav>
      <IconContainer
        style={{ marginRight: "5px" }}
        onClick={() => onToggleSearch(true)}
      >
        <Search />
      </IconContainer>
      {/* <IconContainer style={{ marginRight: "5px" }}>
        <Settings />
      </IconContainer> */}
      <IconContainer onClick={() => onDownload()}>
        <Download />
      </IconContainer>
    </BoardNav>
  );
};

export default Nav;
