
import React, { useEffect } from 'react'
import { StyledPickOrders, Table, Row, Cell, StyledLink, ButtonLink } from './styles';
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
        {pickOrders.map(pickOrder => {
          const date = new Date(pickOrder.createdAt)
          return (
          <Row key={pickOrder._id}>
            <Cell>
              <StyledLink to={`pickOrders/${pickOrder._id}`}>{pickOrder.name}</StyledLink>
            </Cell>
            <Cell>
              {console.log(pickOrder)}
              {pickOrder.setName}
            </Cell>
            <Cell>
              {date.toDateString()}
            </Cell>
          </Row>
        )})}
        <Row footer>
          <ButtonLink to="/pickOrders/create">Create a new pick order</ButtonLink>
        </Row>
      </Table>
    </StyledPickOrders>
  )
}

export default PickOrderList;
