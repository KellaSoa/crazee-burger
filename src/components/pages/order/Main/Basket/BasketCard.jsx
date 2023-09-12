import React from "react";
import styled from "styled-components";
import formatPrice from "../../../../../utils/maths";

export default function BasketCard({
  id,
  title,
  imageSource,
  price,
  quantity,
}) {
  return (
    <BasketCardStyled>
      <div className="delete-button"></div>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="left-info">
          <div className="title">
            <span>{title}</span>
          </div>
          <span className="price">{formatPrice(price)}</span>
        </div>
        <div className="quantity">
          <span>{quantity}</span>
        </div>
      </div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  box-sizing: border-box;
`;
