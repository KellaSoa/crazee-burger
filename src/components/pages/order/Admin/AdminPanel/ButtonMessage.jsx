import React from 'react'
import Button from "../../../../reusable-ui/Button"
import SubmitMessage from "./SubmitMessage"

export default function ButtonMessage({isSubmit}) {
  return (
    <>
        <Button version= "success"
          label={"Ajouter un nouveau produit au menu"}          
        />
        {isSubmit &&  <SubmitMessage/>}
    </>
  )
}