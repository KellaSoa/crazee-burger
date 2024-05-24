import React from 'react'
import styled from 'styled-components';

export default function Select({options, value, name, className, id, onChange}) {
  return (
    <SelectStyled name={name} value={value} className={className} id={id} onChange={onChange}>
        {options.map(({optionValue,label}) =>(
          <option value={optionValue} key={label}>{label}</option>
        ))}
    </SelectStyled>
  )
}
const SelectStyled = styled.select`
  
`;
