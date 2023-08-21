import { styled } from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  font-family: initial;
  color: white;
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  &:active {
    color: white;
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }

  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};
  }
`;
