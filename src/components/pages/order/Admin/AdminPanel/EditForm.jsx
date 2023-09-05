import React, { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";

export default function EditForm() {
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);
  

  //components
  const handleChange = (event) => {
    const { name, value } = event.target;
    //add dinamically name object with [name] ie {title: newValue,imageSource: newValue,price: newValue}
    //get newProduct object and add newValue by form
    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    }
    setProductSelected(productBeingUpdated); //Update Form
    handleEdit(productBeingUpdated); //Update  menu
  };

  return (
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage/>
    </Form>
    // <EditFormStyled>       
    //   <ImagePreview
    //     imageSource={productSelected.imageSource}
    //     title={productSelected.title}
    //   />
    //   <div className="input-fields">
    //     {inputTexts.map((input) => {
    //       return (
    //         <TextInput
    //           key={input.id}
    //           {...input}
    //           onChange={handleChange}
    //           version="minimalist"
    //           ref={input.name === "title"  ? titleEditRef : null}
    //         />
    //       );
    //     })}
    //   </div>
    //   <div className="contain-button">
    //           
    //   </div>
    // </EditFormStyled>
  );
}


