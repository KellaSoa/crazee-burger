import { styled } from "styled-components";
import { theme } from "../../theme";

export default function PannelButton({ label, Icon, className }) {
  return (
    <PannelButtonStyled className={className}>
      {Icon && Icon}
      <span>{label}</span>
    </PannelButtonStyled>
  );
}

const PannelButtonStyled = styled.button`
  font-family: initial;
  color: ${theme.colors.greyDark};
  background-color: ${theme.colors.greyLight};
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;

  &:active {
    color: white;
    background-color: ${theme.colors.greyLight};
    border: 1px solid ${theme.colors.greyLight};
  }

  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.greyLight};
    border: 2px solid ${theme.colors.greyLight};
  }
  span {
    padding: 9px 9px;
  }
`;
