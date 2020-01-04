import React from 'react'
import { StyledPickOrder, StyledInput, StyledTable, StyledRow, StyledCell } from './styles';
import { useSelector } from 'react-redux';

const PickOrder = ({ id }) => {

  const { pickOrders } = useSelector(state => state);

  const pickOrder = pickOrders.find(pickOrder => pickOrder._id === id);

  return (
    <StyledPickOrder>
      <h1>{pickOrder.name}</h1>
      <StyledTable>
          {pickOrder.picks.map((pick, idx) => (
            <StyledRow key={pick.name} even={idx % 2 === 0}>
              <StyledCell>{pick.name}</StyledCell>
              <StyledCell>Pick Order: <StyledInput type="number" name="pickOrder" defaultValue={pick.pickOrder} /></StyledCell>
              <StyledCell>Tier: <StyledInput type="number" name="tier" defaultValue={pick.tier} /></StyledCell>
            </StyledRow>
          ))}
      </StyledTable>
    </StyledPickOrder>
  )
}

export default PickOrder;
