import { FiCheck } from "react-icons/fi";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";

export default function SubmitMessage() {
  return (
    <SubmitMessageStyled className='submit-message'>
        <FiCheck className='uicon'/>
        <span className='message'>Ajouté avec succès !</span>
    </SubmitMessageStyled>
  )
}

const SubmitMessageStyled  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    .message{
      margin-left: 5px;
      font-size: ${theme.fonts.size.P0};
      color: ${theme.colors.green};
    }
    .uicon{
      color: ${theme.colors.green};
      margin-left: 10px;
      border: 1px solid ${theme.colors.green};
      border-radius: ${theme.borderRadius.circle};
      vertical-align: center;


    }
`;