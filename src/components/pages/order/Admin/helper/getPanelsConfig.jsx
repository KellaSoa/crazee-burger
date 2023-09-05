import AddForm from "../AdminPanel/AddForm";
import EditForm from "../AdminPanel/EditForm";
import HintMessage from "../AdminPanel/HintMessage";

export const getPanelsConfig = (hasCardSelected) =>[
    {
        id: 'collapsed',
        content: "",
    },
    {
        id:"add",
        Content: <AddForm/>

    },
    {
        id:"edit",
        Content: hasCardSelected ? <EditForm/> : <HintMessage/>
    },
    
    
]