import styled, { css } from "styled-components";
import { theme } from "../../theme";
import React from "react";

const TextInput = React.forwardRef(
  ({ onChange, Icon, className, version = "normal", ...extraProps }, ref) => {
    return (
      <TextInputStyled className={className} version={version}>
        <div className="icon">{Icon && Icon}</div>
        <input ref={ref} onChange={onChange} type="text" {...extraProps} />
      </TextInputStyled>
    )
  }
)

export default TextInput
const TextInputStyled = styled.div`
  //background-color: ${theme.colors.white};
  border-radius: 5px;
  display: flex;
  align-items: center;    

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin: 0 8px 0 10px;
    color: ${theme.colors.greySemiDark};
  }

  input { 
    border: none;
    font-size: ${theme.fonts.size.SM};
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
  /* ${(props) => props.version === "normal" && extraNormalStyle} get value name version */
  ${({version}) => extraStyle[version] }
`;
const extraNormalStyle = css`
  background-color :${theme.colors.white};
  padding: 18px 24px;
  color :${theme.colors.greyDark} ;
  margin:18px 0;
  input{
    color: ${theme.colors.greyDark};
  }
`;
const extraMinimalistStyle = css`
  background-color: ${theme.colors.background_white};    
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input{
      background: ${theme.colors.background_white};
      color: ${theme.colors.dark};
    &:focus{
      outline: 0;
    }
    &::placeholder {
      background: ${theme.colors.background_white};
    }
  }
`;
const extraStyle = {
  normal: extraNormalStyle,
  minimalist: extraMinimalistStyle
}