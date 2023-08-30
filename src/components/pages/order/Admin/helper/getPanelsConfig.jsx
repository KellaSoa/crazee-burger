import AddForm from "../AdminPanel/AddForm";
import EditForm from "../AdminPanel/EditForm";

export const getPanelsConfig = [
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
        Content: <EditForm/>
    },
    
    
]