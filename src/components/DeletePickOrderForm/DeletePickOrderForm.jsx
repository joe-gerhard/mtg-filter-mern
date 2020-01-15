import React from 'react'
import { StyledDeletePickOrderForm, ConfirmButton, CancelButton } from './styles';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Axios from 'axios';

const DeletePickOrderForm = () => {

  const { id }  = useParams();
  const pickOrder = useSelector(state => state.pickOrders.find(p => p._id === id));
  const history = useHistory();
  
  const handleDelete = () => {
    Axios.delete(`/pickOrders/${id}`)
    .then(response => {
      console.log(response.data);
      history.push('/profile');
    })
    .catch(err => {
      console.log(err);
    })
  }

  const handleCancel = () => {
    history.goBack();
  }

  return (
    <StyledDeletePickOrderForm>
      Are you sure you want to delete {pickOrder.name}?
      <div>
        <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        <ConfirmButton onClick={handleDelete}>Confirm</ConfirmButton>
      </div>
    </StyledDeletePickOrderForm>
  )
}

export default DeletePickOrderForm;
