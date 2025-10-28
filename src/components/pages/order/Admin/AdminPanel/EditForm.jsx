import React, { useContext, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";
import SavingMessage from "./SavingMessage";
import { useSuccessMessage } from "../../../../../hooks/useSuccessMessage";

export default function EditForm() {
  const { username,productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);
  
    const [valueOnFocus,setValueOnFocus] = useState()
    const {isSubmit :isSaved, displaySuccessMessage} = useSuccessMessage() //rename isSubmit to isSaved
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
    handleEdit(productBeingUpdated,username); //Update  menu
  };

  const handleOnFocus = (event) => { 
    const valueOnFocus = event.target.value 
    setValueOnFocus(valueOnFocus)
  }
  const handleOnBlur = (event) => { 
    const valueOnBlur = event.target.value 
    if(valueOnFocus !== valueOnBlur ){
      displaySuccessMessage()
    }
      
   }
 
  return (
    <Form product={productSelected} onChange={handleChange} onFocus={handleOnFocus} onBlur={handleOnBlur} ref={titleEditRef}>
      { isSaved ? <SavingMessage/>: <EditInfoMessage/>}      
    </Form>
    //
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


