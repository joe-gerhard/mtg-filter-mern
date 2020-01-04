
import React, { useEffect } from 'react'
import { StyledPickOrders } from './styles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const PickOrderList = () => {

  const { user, pickOrders } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:3001/pickOrders/${user._id}`)
    .then(response => {
      dispatch({type: 'SET_PICK_ORDERS', payload: response.data});
    })
    .catch(err => {
      console.log(err)
    })
  },[dispatch, user]);

  return (
    <StyledPickOrders>
      {pickOrders.map(pickOrder => (
        <Link to={`pickOrders/${pickOrder._id}`}key={pickOrder._id}>{pickOrder.name}</Link>
      ))}
      <Link to="/pickOrders/create">Create a new pick order</Link>
    </StyledPickOrders>
  )
}

export default PickOrderList;
