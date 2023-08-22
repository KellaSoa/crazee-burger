import { styled } from "styled-components";
import { theme } from "../../theme";
import PrimaryButton from "./PrimaryButton";
export default function Card({ title, imageSource, info }) {
  return (
    <CardStyled>
      <img src={imageSource} alt={title} />
      <div className="title">{title} </div>
      <div className="description">
        <span className="info">{info}</span>
        <button></button>
        <PrimaryButton className="btn-card" label={"Ajouter"} />
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  width: 240px;
  height: 330px;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.extraRound};
  margin: 20px 20px;
  padding: 20px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  img {
    height: 145px;
    display: block;
    margin: 0 auto;
  }
  .title {
    font-family: "Amatic SC", cursive;
    padding: 30px ${theme.spacing.lg};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.dark};
    font-weight: ${theme.fonts.weights.semiBold};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
  .description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: ipx solid red;
    margin-left: 20px;
    margin-right: 20px;
  }
  .info {
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P3};
  }
  .btn-card {
    width: auto;
  }
`;
