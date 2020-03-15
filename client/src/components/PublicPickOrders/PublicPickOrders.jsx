import React from 'react'

const PublicPickOrders = ({ pickOrders, handleApplyPickOrder }) => {



  return (
    <div>
      <ul>
        {pickOrders.map((pickOrder, idx) => {
          return (
            <li 
            onClick={() => handleApplyPickOrder(idx)}
            key={pickOrder._id}
            >{pickOrder.name}, {pickOrder.setName}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default PublicPickOrders;
