import React, { useState } from 'react'
import { StyledPickOrder, StyledInput, StyledTable, StyledRow, StyledCell, NameInput } from './styles';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const PickOrder = ({ id }) => {

  const { pickOrders }  = useSelector(state => state)
  const dispatch = useDispatch();
  const pickOrder = pickOrders.find(pickOrder => pickOrder._id === id);
  const [ picks, setPicks ] = useState(pickOrder.picks);
  const [ name, setName ] = useState(pickOrder.name)
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`/pickOrders/${pickOrder._id}`, {
      picks,
      name
    })
    .then(response => {
      pickOrders[pickOrders.findIndex(pickOrder => pickOrder._id === id)] = response.data;
      dispatch({type: 'SET_PICK_ORDERS', payload: pickOrders})
    })
  }

  const handleChange = event => {
    const [ idx, type ] = event.target.id.split('|');
    let value = event.target.value;
    let picksCopy = [...picks]

    if(type === 'tier' && value > 8) value = 8;
    if(type === 'tier' && value < 1) value = 1;
    if(type === 'pickOrder' && value > 999) value = 999;
    if(type === 'pickOrder' && value < 1) value = 1;
    
    picksCopy[idx][type] = value;
    picksCopy.sort((a, b) => a.pickOrder - b.pickOrder)

    setPicks(picksCopy)
  }

  const handleChangeName = event => {
    setName(event.target.value);
  }
  
  const handleApplyToFilter = () => {
    history.push(`/filter/${id}`)
  }

  return (
    <StyledPickOrder>
      <h1><NameInput type="text" value={name} onChange={handleChangeName}/></h1>
      <h3>{pickOrder.setName}</h3>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="save"/>
        <button onClick={handleApplyToFilter}>Apply to filter</button>
        <StyledTable>
            {picks.map((pick, idx) => (
              <StyledRow key={pick.name} even={idx % 2 === 0}>
                <StyledCell>{pick.name}</StyledCell>
                <StyledCell>
                  <label htmlFor={idx}>Pick Order:</label>
                  <StyledInput
                    type="number" 
                    name="pickOrder"
                    id={`${idx}|pickOrder`}
                    value={pick.pickOrder}
                    onChange={handleChange}
                    min="1"
                    max="999"
                  />
                </StyledCell>
                <StyledCell>
                  <label htmlFor={`${idx}Tier`}>Tier:</label> 
                  <StyledInput 
                    type="number" 
                    name="tier"
                    id={`${idx}|tier`}
                    value={pick.tier}
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
