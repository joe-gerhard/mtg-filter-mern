import React from 'react'
import { StyledPickOrder } from './styles';
import { useSelector } from 'react-redux';

const PickOrder = ({ id }) => {

  const { pickOrders } = useSelector(state => state);

  const pickOrder = pickOrders.find(pickOrder => pickOrder._id === id);

  return (
    <StyledPickOrder>
      <h1>{pickOrder.name}</h1>
      <ul>
        {pickOrder.picks.map(pick => (
          <li key={pick.name}>{pick.name}</li>
        ))}
      </ul>
    </StyledPickOrder>
  )
}

export default PickOrder;
