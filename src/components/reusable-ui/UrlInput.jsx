import styled from "styled-components";
import { theme } from "../../theme";

export default function UrlInput({ value, onChange, Icon,className, ...extraProps }) {
  return (
    <UrlInputStyled className={className}>
      {Icon}
      <input type="url" value={value} onChange={onChange} {...extraProps} />
    </UrlInputStyled>
  );
}

const UrlInputStyled = styled.div`
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
    font-size: 15px;
    width: 100%;
    padding: 10x;

    &::placeholder {
      background: white;
      color: ${theme.colors.greyMedium};
    }
    &:hover:not(:disabled) {
      background-color: white;
      color: ${theme.colors.green};
      border: 1px solid ${theme.colors.green};
      transition: all 200ms ease-out;
    }
  }
`;
