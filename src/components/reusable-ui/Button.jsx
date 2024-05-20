import { css, styled } from "styled-components";
import { theme } from "../../theme";

export default function Button({
  label,
  Icon,
  version = "primary",
  onClick,
  className
}) {
  return (
    <ButtonStyled version={version} onClick={onClick} className={className}>
      <span>{label}</span>
      {Icon && <div className="icon">{Icon && Icon}</div>}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  width: 100%;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
  white-space: nowrap; //prevents the text label from wrapping to the next line.
  text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
  line-height: 1;
  font-family: initial;

  padding: 18px 24px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;
  color: white;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

 
  ${({ version }) => extraButton[version]}
`;

const extraButtonPrimary = css`
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};

  &:hover:not(:disabled) {
    background-color: white;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
  }

  &:active {
    color: white;
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }
`;

const extraButtonSuccess = css`
  width: 50%;
  background-color: ${theme.colors.green};
  padding: 10px 20px;
  border: 1px solid ${theme.colors.green};
  &:hover:not(:disabled) {
    background-color: white;
    color: ${theme.colors.green};
    border: 1px solid ${theme.colors.green};
    transition: all 200ms ease-out;
  }

  &:active {
    color: white;
    background-color: ${theme.colors.green};
    border: 1px solid ${theme.colors.green};
  }
`;

const extraButton = {
  primary: extraButtonPrimary,
  success: extraButtonSuccess,
};
