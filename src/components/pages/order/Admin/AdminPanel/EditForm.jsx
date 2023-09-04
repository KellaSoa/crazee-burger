import React, { useContext } from "react";
import { styled } from "styled-components";
import HintMessage from "./HintMessage";
import OrderContext from "../../../../context/OrderContext";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./getInputTextsConfig";
import { theme } from "../../../../../theme";

export default function EditForm() {
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);
  const inputTexts = getInputTextsConfig(productSelected);
  

  //components
  const handleChange = (event) => {
    const { name, value } = event.target;
    //add dinamically name object with [name] ie {title: newValue,imageSource: newValue,price: newValue}
    //get newProduct object and add newValue by form
    setProductSelected({ ...productSelected, [name]: value });
    handleEdit(productSelected);
  };

  return (
    <EditFormStyled>      
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => {
          return (
            <TextInput
              key={input.id}
              {...input}
              onChange={handleChange}
              version="minimalist"
              ref={input.name === "title"  ? titleEditRef : null}
            />
          );
        })}
      </div>
      <div className="contain-button">
        Cliquer sur un produit du menu pour le modifier <span> en temp réel</span>      </div>
    </EditFormStyled>
  );
}

const EditFormStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  //width: 70%;
  height: 100%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;
  .input-fields {
    grid-area: 1 / 2 / 4 / -2;
    display: grid;
    grid-row-gap: 8px;
  }
  .contain-button{
  grid-area: 4 / 2 / 5 / -1;
  display:flex;
  align-items: center;
  color: ${theme.colors.primary};
  span{
    padding-left: 5px;
    text-decoration: underline;
  }
  }
`;
