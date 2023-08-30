import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ value, onChange, Icon, className, ...extraProps }) {
  return (
    <TextInputStyled className={className}>
      {Icon}
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.dark};
    width: 100%;
    padding: 10x;
    background: ${theme.colors.white};
    &::placeholder {
      background: ${theme.colors.white};
    }
    &:focus {
      border: none;
    }
  }
`;
