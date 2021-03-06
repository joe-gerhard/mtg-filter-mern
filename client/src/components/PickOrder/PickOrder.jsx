import React, { useState } from 'react'
import { StyledPickOrder, StyledInput, StyledTable, StyledRow, StyledCell, NameInput, StyledForm, StyledImage } from './styles';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../Button';


const PickOrder = () => {

  const { selectedPickOrder: pickOrder } = useSelector(state => state)
  const dispatch = useDispatch();
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
      dispatch({type: 'SET_SELECTED_PICK_ORDER', payload: response.data})
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
    history.push(`/filter`)
  }

  const handleDelete = () => {
    history.push(`/pickOrders/delete/${pickOrder._id}`)
  }

  const handleMouseEnter = (imageUrl) => {
    setFocusedCard(imageUrl);
  }

  const handleMouseLeave = event => {
    setFocusedCard('');
  }

  return (
    <StyledPickOrder>
      <h1><NameInput type="text" value={name} onChange={handleChangeName}/></h1>
      <h3>Set: {pickOrder.setName}</h3>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <Button back value="Back" />
          <Button submit value="Save"/>
          <Button onClick={handleApplyToFilter} value="Apply to filter" />
          <Button onClick={handleDelete} value="Delete" />
        </div>
        <StyledTable>
            {picks.map((pick, idx) => (
              <div key={pick.name}>
                <StyledImage src={pick.imageUrl} visible={focusedCard === pick.imageUrl} alt=''/>
                <StyledRow 
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
              </div>
            ))}
        </StyledTable>
      </StyledForm>
    </StyledPickOrder>
  )
}

export default PickOrder;
