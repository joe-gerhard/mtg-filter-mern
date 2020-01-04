import React, { useState } from 'react'
import { StyledCreatePickOrderForm } from './styles';
import SetSelector from '../SetSelector/SetSelector';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const CreatePickOrderForm = () => {
  
  const [ name, setName ] = useState('');
  const { user, cards, selectedSet } = useSelector(state => state);
  const history = useHistory();

  const handleChange = e => {
    setName(e.target.value);
  }

  const handleSubmit = () => {
    axios.post('/pickOrders/create', {
      name,
      userId: user._id, 
      picks: createDefaultPickOrder(cards),
      set: selectedSet,
    })
    .then(response => {
      history.push('/profile');
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <StyledCreatePickOrderForm>
      <div>
        set:
        <SetSelector /> 
      </div>
      <div>
        name:
        <input type="text" value={name} onChange={handleChange}/>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </StyledCreatePickOrderForm>
  )
}

export default CreatePickOrderForm;

function createDefaultPickOrder(cards) {
  let picks = [];

  cards.forEach((card, idx) => {
    let pickObj = {
      name: card.name,
      pickOrder: (idx + 1),
      tier: 1
    }
    picks.push(pickObj);
  })

  return picks;
}