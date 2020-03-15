
import React, { useEffect } from 'react'
import { StyledPickOrders, Table, Row, Cell, StyledLink, StyledEditButton } from './styles';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button';

const PickOrderList = () => {

  const { user, pickOrders } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`/pickOrders/${user._id}`)
    .then(response => {
      dispatch({type: 'SET_PICK_ORDERS', payload: response.data});
    })
    .catch(err => {
      console.log(err)
    })
  },[dispatch, user]);

  const handleSetSelectedPickOrder = (idx) => {
    dispatch({ type: "SET_SELECTED_PICK_ORDER", payload: pickOrders[idx] })
  }

  return (
    <StyledPickOrders>
      <h1>{user.name}'s Pick Orders</h1>
      <Table>
        <Row header>
          <Cell>
            Name
          </Cell>
          <Cell>
            Set
          </Cell>
          <Cell>
            Date Created
          </Cell>
        </Row>
        {pickOrders.map((pickOrder, idx) => {
          const date = new Date(pickOrder.createdAt)
          return (
          <Row key={pickOrder._id}>
            <Cell>
              <StyledLink onClick={() => handleSetSelectedPickOrder(idx)} to={'/filter'}>{pickOrder.name}</StyledLink>
              <StyledEditButton onClick={() => handleSetSelectedPickOrder(idx)} to={'/pickOrder'} >Edit</StyledEditButton>
            </Cell>
            <Cell>
              {pickOrder.setName}
            </Cell>
            <Cell>
              {date.toDateString()}
            </Cell>
          </Row>
        )})}
      </Table>
      <Button to="/pickOrders/create" value='Create a new pick order' />
    </StyledPickOrders>
  )
}

export default PickOrderList;
