import React, { useState } from 'react'
import { StyledPickOrder, StyledInput, StyledTable, StyledRow, StyledCell, NameInput, ApplyButton, SaveButton, StyledForm, StyledImage, DeleteButton } from './styles';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const PickOrder = ({ id }) => {

  const { pickOrders }  = useSelector(state => state)
  const dispatch = useDispatch();
  const pickOrder = pickOrders.find(pickOrder => pickOrder._id === id);
  const [ picks, setPicks ] = useState(pickOrder.picks);
  const [ name, setName ] = useState(pickOrder.name)
  const [ focusedCard, setFocusedCard ] = useState('');
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

  const handleDelete = () => {
    history.push(`/pickOrders/delete/${id}`)
  }

  const handleMouseEnter = (imageUrl) => {
    setFocusedCard(imageUrl);
  }

  const handleMouseLeave = event => {
    setFocusedCard('');
  }

  return (
    <StyledPickOrder>
      <StyledImage src={focusedCard} alt=''/>
      <h1><NameInput type="text" value={name} onChange={handleChangeName}/></h1>
      <h3>Set: {pickOrder.setName}</h3>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <SaveButton type="submit" value="Save"/>
          <ApplyButton onClick={handleApplyToFilter}>Apply to filter</ApplyButton>
          <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        </div>
        <StyledTable>
            {picks.map((pick, idx) => (
              <StyledRow 
                key={pick.name} 
                even={idx % 2 === 0} 
                onMouseEnter={() => handleMouseEnter(pick.imageUrl)}
                onMouseLeave={handleMouseLeave}
              >
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
      </StyledForm>
    </StyledPickOrder>
  )
}

export default PickOrder;
