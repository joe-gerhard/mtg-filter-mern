import React from 'react'
import { StyledDeletePickOrderForm, Card } from './styles';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import Button from '../Button';

const DeletePickOrderForm = () => {

  const { id }  = useParams();
  const pickOrder = useSelector(state => state.pickOrders.find(p => p._id === id));
  const history = useHistory();
  
  const handleDelete = () => {
    Axios.delete(`/pickOrders/${id}`)
    .then(response => {
      history.push('/profile');
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <StyledDeletePickOrderForm>
      <Card>
        Are you sure you want to delete {pickOrder.name}?
      </Card>
      <div>
        <Button back value="Cancel" />
        <Button onClick={handleDelete} value="Confirm" />
      </div>
    </StyledDeletePickOrderForm>
  )
}

export default DeletePickOrderForm;
