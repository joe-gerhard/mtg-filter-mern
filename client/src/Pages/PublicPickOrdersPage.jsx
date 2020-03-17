import React, { useEffect } from 'react'
import PublicPickOrders from '../components/PublicPickOrders/PublicPickOrders';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const PublicPickOrderPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { publicPickOrders, user } = useSelector(state => state);

  useEffect(() => {
    axios.get('/pickOrders')
    .then(response => {
      dispatch({ type: "SET_PUBLIC_PICK_ORDERS", payload: response.data })
    })
  }, [dispatch])

  const handleApplyPickOrder = (idx) => {
    dispatch({type: "SET_SELECTED_PICK_ORDER", payload: publicPickOrders[idx]})
    history.push('/filter')
  }

  const handleCopyPickOrder = (pickOrder) => {
    axios.post('/pickOrders/create', {
      name: 'Copy of ' + pickOrder.name,
      setName: pickOrder.setName,
      userId: user._id, 
      picks: pickOrder.picks
    })
    .then(response => {
      history.push('/profile');
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <PublicPickOrders 
      pickOrders={publicPickOrders} 
      handleApplyPickOrder={handleApplyPickOrder}
      handleCopyPickOrder={handleCopyPickOrder}
      user={user}
    />
  )
}

export default PublicPickOrderPage;
