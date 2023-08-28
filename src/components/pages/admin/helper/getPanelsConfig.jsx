export const getPanelsConfig = (tabName,tabActive) => [
    {
        className: tabName == 'collapsed'? 'panelActive':'panelInActive',
        text: "",
    },
    {
        className: tabName == "add" || tabActive == "add"? 'panelActive':'panelInActive',
        text: "Ajouter Produit"
    },
    {
        className: tabName == 'edit' || tabActive == "edit"? 'panelActive':'panelInActive',
        text: "Modifier Produit"
    },
    
    
]