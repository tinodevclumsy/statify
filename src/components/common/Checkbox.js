import styled from "styled-components";

const Input = styled.input`
  accent-color: ${(props) => props.theme.primary};
  width: 18px;
  height: 18px;
`;

const CheckBox = ({ checked, onChange }) => {
  return <Input checked={checked} onChange={onChange} type="checkbox" />;
};

export default CheckBox
