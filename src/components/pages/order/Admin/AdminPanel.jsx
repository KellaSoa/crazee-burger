import React, { useContext } from 'react'
import { theme } from '../../../../theme/index';
import { styled } from 'styled-components';
import { getPanelsConfig } from './helper/getPanelsConfig';
import OrderContext from '../../../context/OrderContext';

export default function AdminPanel() {
    const {tabActive} = useContext(OrderContext)    

    const panels = getPanelsConfig

    return (
        <AdminPanelStyled>            
           {panels.map((panel,index)=>{
                return <div key={index} className={tabActive === panel.id ? 'panelActive':'panelInActive'}>{panel.text}</div>
           })} 
            {/* <div className={tabActive == "add"? 'panelActive':'panelInActive'}>Ajouter Produit</div> */}
        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
    background-color: ${theme.colors.background_white};
    color: ${theme.colors.dark};
    height: 250px;
    background: ${theme.colors.white};
    border: 1px solid  ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};

    .panelActive{
        display: block;
    }

    .panelInActive{
        display: none;
    }
`;