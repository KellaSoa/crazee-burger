import { styled } from "styled-components";
import Card from "../../../reusable-ui/Card";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { formatPrice } from "../../../../utils/maths";
import { useState } from "react";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map(({ id, title, price, imageSource }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource}
            info={formatPrice(price)}
          />
        );
      })}
      ;
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`;