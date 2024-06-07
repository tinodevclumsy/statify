import { BoardNav } from "./Nav.styled";
import IconContainer from "../common/Icon";
import { Settings, Search } from "react-feather";

const Nav = ({ onToggleSearch, onToggleOption }) => {
  return (
    <BoardNav>
      <IconContainer style={{ marginRight: "5px" }}>
        <Search onClick={() => onToggleSearch(true)} />
      </IconContainer>
      <IconContainer>
        <Settings />
      </IconContainer>
    </BoardNav>
  );
};

export default Nav;
