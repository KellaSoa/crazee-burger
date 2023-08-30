import React, { useContext } from 'react'
import OrderContext from '../../../../context/OrderContext'

export default function EmptyMenuAdmin({onReset}) {
  return (
    <div>
        <span>Pas de produit</span>
        <button onClick={onReset}>Générer de nouveaux les produits</button>
    </div>
  )
}
