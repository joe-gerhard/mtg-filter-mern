import React, { useEffect } from 'react'
import PublicPickOrders from '../components/PublicPickOrders/PublicPickOrders';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const PublicPickOrderPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { publicPickOrders } = useSelector(state => state);

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

  return (
    <PublicPickOrders 
      pickOrders={publicPickOrders} 
      handleApplyPickOrder={handleApplyPickOrder}
    />
  )
}

export default PublicPickOrderPage;
