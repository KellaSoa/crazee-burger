import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import Button from "../../../../reusable-ui/Button";

export default function EmptyMenuAdmin({onclick}) {
  return (
    <EmptyMenuAdminStyled>
        <span className="title">Le menu est vide</span>
        <span className="description">Cliquez ci-dessous pour le réinitialiser</span>
        <div>
          <Button version= "primary" onclick={onclick}
            label={"Générer de nouveaux les produits"}
          />
        </div>      
    </EmptyMenuAdminStyled>
  )
}

const EmptyMenuAdminStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
justify-items: center;
text-align: center;

.title,
.description{
  font-family: "Amatic SC",cursive;
  font-size: ${theme.fonts.size.P4};
  color: ${theme.colors.greyBlue};
}
.title{
  font-weight: ${theme.fonts.weights.semiBold};
}
.description{ 
  margin-top: 20px;
}
div{
  min-width: 400px;
  margin-top: 30px;
  button{
    width: auto;
  }
}
  
`;
