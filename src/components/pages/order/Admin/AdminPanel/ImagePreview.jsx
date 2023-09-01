import { styled } from 'styled-components';
import { theme } from '../../../../../theme';

export default function ImagePreview({imageSource,title}) {
  return (
    <ImagePreviewStyled>
        { imageSource ? <img src={imageSource} alt={title} /> : <div> Aucune image</div>}
      </ImagePreviewStyled>
  )
}

const ImagePreviewStyled = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  padding: 20px;
  border: 1px solid ${theme.colors.greyLight};
  border: ${theme.borderRadius.subtle};
  color: ${theme.colors.greyLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  text-align: center;
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  div{
    margin:0px auto;
  }
  
`;
