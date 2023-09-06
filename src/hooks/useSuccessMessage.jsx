import { useState } from "react"

export const useSuccessMessage = () => {
    const [isSubmit, setIsSubmit] = useState(false)
  
    const displaySuccessMessage = () =>{
        setIsSubmit(true)
        setTimeout(()=>{
          setIsSubmit(false)
        },2000)
      }
    return {isSubmit, displaySuccessMessage}
}
