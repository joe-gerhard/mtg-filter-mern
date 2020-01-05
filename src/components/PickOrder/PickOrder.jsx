import React, { useState } from 'react'
import { StyledPickOrder, StyledInput, StyledTable, StyledRow, StyledCell } from './styles';
import { useSelector } from 'react-redux';
import axios from 'axios';

const PickOrder = ({ id }) => {

  const { pickOrders } = useSelector(state => state);

  const pickOrder = pickOrders.find(pickOrder => pickOrder._id === id);

  const [ inputs, setInputs ] = useState(getInputs(pickOrder.picks))


  function getInputs(picks) {
    let inputs = {}
    picks.forEach((pick, idx) => {
      inputs[pick.name] = {
        pickOrder: pick.pickOrder,
        tier: pick.tier
      }
    })
    return inputs;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`/pickOrders/${id}`, {
      inputs
    })
  }

  const handleChange = event => {
    const [type, card] = event.target.name.split('|');
    let value = event.target.value;

    if(type === 'tier' && value > 8) value = 8;
    if(type === 'tier' && value < 1) value = 1;
    if(type === 'pickOrder' && value > 999) value = 999;
    if(type === 'pickOrder' && value < 1) value = 1;

    console.log(type, card);
    setInputs({
      ...inputs,
      [card]: {
        ...inputs[card],
        [type]: value
      }
    })
  }

  return (
    <StyledPickOrder>
      <h1>{pickOrder.name}</h1>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="submit"/>
        <StyledTable>
            {pickOrder.picks.map((pick, idx) => (
              <StyledRow key={pick.name} even={idx % 2 === 0}>
                <StyledCell>{pick.name}</StyledCell>
                <StyledCell>
                  <label htmlFor={`${idx}PickOrder`}>Pick Order:</label>
                  <StyledInput
                    type="number" 
                    name={`pickOrder|${pick.name}`}
                    id={`${idx}PickOrder`}
                    value={inputs[pick.name].pickOrder}
                    onChange={handleChange}
                    min="1"
                    max="999"
                  />
                </StyledCell>
                <StyledCell>
                  <label htmlFor={`${idx}Tier`}>Tier:</label> 
                  <StyledInput 
                    type="number" 
                    name={`tier|${pick.name}`}
                    id={`${idx}Tier`}
                    value={inputs[pick.name].tier}
                    onChange={handleChange}
                    min="1"
                    max="8"
                  />
                </StyledCell>
              </StyledRow>
            ))}
        </StyledTable>
      </form>
    </StyledPickOrder>
  )
}

export default PickOrder;
