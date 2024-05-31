import React from "react";
import styled from "styled-components";
import { Search } from "react-feather";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.dark};
  border: 1px solid ${(props) => props.theme.dark};
  border-radius: 25px;
  &:focus-within {
    background-color: 1px solid #f0f0f0;
    box-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
  }
`;

const Icon = styled.div`
  display: flex;
  padding: 5px 10px;
  color: #fff;
`;

const Input = styled.input`
  padding: 10px;
  background-color: inherit;
  color: #fff;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  border: none;
  outline: none;
`;

const InputSearch = ({ onSearch }) => {
  return (
    <SearchContainer>
      <Icon>
        <Search size={18} />
      </Icon>
      <Input onChange={(e) => onSearch(e.target.value)} />
    </SearchContainer>
  );
};

export default InputSearch;
