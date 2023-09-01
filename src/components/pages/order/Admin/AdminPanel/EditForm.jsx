import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import HintMessage from './HintMessage';

export default function EditForm() {
  return (
    <EditFormStyled>
      <HintMessage/>
    </EditFormStyled>
  )
}

const EditFormStyled = styled.div`

`;