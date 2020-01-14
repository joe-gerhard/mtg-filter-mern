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
      setName: selectedSet,
      userId: user._id, 
      picks: createDefaultPickOrder(cards),
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
        <SetSelector light/> 
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

  cards.forEach((card) => {
    let pickObj = {
      name: card.name,
      pickOrder: 999,
      tier: 1, 
      imageUrl: card.imageUrl,
    }
    picks.push(pickObj);
  })

  return picks;
}