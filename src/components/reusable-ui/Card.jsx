import styled, { css } from "styled-components";
import { theme } from "../../theme";
import Button from "./Button";
import { fadeInFromRight, fadeInFromTop } from "../../theme/animations";

export default function  Card({
  Icon,
  title,
  imageSource,
  leftDescription,
  onDelete,
  onClick,
  isHoverable,
  isSelected,
  onAdd,
  isOverlapImageVisible,
  overlapImageSource
}) {
  return (
    <CardStyled
      onClick={onClick}
      $isHoverable={isHoverable}
      $isSelected={isSelected}
    >
      <button
        className="delete-button"
        aria-label="delete-button"
        onClick={onDelete}
      >
        {Icon && Icon}
      </button>
      <div className="image">
          {isOverlapImageVisible && (
            <div className="overlap">
              <div className="transparent-layer"></div>
              <img className="overlap-image" src={overlapImageSource} alt="overlap" />
            </div>
          )}
          <img className="product" src={imageSource} alt={title} />
        </div>
      <div className="text-info">
        <div className="title">{title}</div>
        <div className="description">
          <div className="left-description">{leftDescription}</div>
          <div className="right-description">
            <Button
              className="primary-button"
              label={"Ajouter"}
              onClick={onAdd} 
            />
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background: ${theme.colors.white};
  border: border-box;
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  position: relative;

  .delete-button {
    border: 1px solid red;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    color: ${theme.colors.primary};
    z-index: 2;
    padding: 0;
    border: none;
    background: none;
    animation: ${fadeInFromRight} ${theme.speed.slow} ease-out;

    .icon {
      /* border: 1px solid blue; */
      height: 100%;
      width: 100%;
    }

    :hover {
      color: ${theme.colors.red};
      /* background-color: red; */
    }
    :active {
      color: ${theme.colors.primary};
    }
  }
  .image {
      /* border: 2px solid green; */
      margin-top: 30px;
      margin-bottom: 20px;
      /* position: relative; */
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .overlap {
        .overlap-image {
          /* border: 1px solid red; */
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80%;
          height: 100%;
          z-index: 1;
          animation: ${fadeInFromTop} 500ms;
          border-radius: ${theme.borderRadius.extraRound};
        }

        .transparent-layer {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 70%;
          background: snow;
          z-index: 1;
          border-radius: ${theme.borderRadius.extraRound};
        }
      }
    }

  .text-info {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;

    .title {
      margin: auto 0;
      font-size: ${theme.fonts.size.P4};
      position: relative;
      bottom: 10px;
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};

        .primary-button {
          font-size: ${theme.fonts.size.XS};
          cursor: pointer;
          padding: 12px;
          text-align: center;
        }
      }
    }
  }

  ${({ $isHoverable }) => $isHoverable && extraStyleIsHoverable}
  ${({ $isHoverable, $isSelected }) =>
    $isHoverable && $isSelected && extraStyleSelected}
`;

const extraStyleIsHoverable = css`
  &:hover:not(:disabled) {
    transform: scale(1.05);
    transition: ease-in-out 0.4;
    border: 1px solid ${theme.colors.primary};
    cursor: pointer;
  }
`;
const extraStyleSelected = css`
  background: ${theme.colors.primary};
  .delete-button {
    color: ${theme.colors.white};
    :hover {
      color: ${theme.colors.red};
    }
    :active {
      color: ${theme.colors.white};
    }
  }
  .text-info {
    .description {
      .left-description {
        color: ${theme.colors.white};
      }

      .right-description {
        .primary-button {
          background: ${theme.colors.white};
          color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.primary};
          &:hover:not(:disabled) {
            border: 1px solid ${theme.colors.white};
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
            cursor: pointer;
          }
          :active {
            border: 1px solid ${theme.colors.white};
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
          }
        }
      }
    }
  }
`;
