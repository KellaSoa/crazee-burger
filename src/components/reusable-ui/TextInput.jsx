import styled from "styled-components";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <TextInputStyled>
      {Icon}
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    font-size: 15px;
    margin-right: 8px;
    color: #93a2b1;
  }

  input {
    border: none;
    font-size: 15px;
    width: 100%;
    padding: 10x;
  }
  &::placeholder {
    background: white;
    color: lightgray;
  }
`;
