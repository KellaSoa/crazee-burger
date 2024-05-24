import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme';

export default function Select({options, value, name, className, id, onChange,onFocus,onBlur,Icon}) {
  return (
    <SelectStyled  className={className}>
        {Icon && <div className="icon">{Icon}</div>}
        <select name={name} value={value} id={id} onChange={onChange}  onFocus= {onFocus } onBlur={onBlur}>
        {options.map(({optionValue,label}) =>(
            <option value={optionValue} key={label}>{label}</option>
          ))}
        </select>
    </SelectStyled>
  )
}
const SelectStyled = styled.div`
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 8px 16px;

  .icon {
    font-size: ${theme.fonts.P1};
    margin-right: 13px;
    color: ${theme.colors.greyBlue};
    display: flex; // centre verticalement l'icône dans le champ select
  }

  select {
    background: ${theme.colors.background_white};
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;
    outline: 0;
  }
`;
