import React from 'react'
import { StyledPickOrders, Table, Row, Cell, StyledLink } from './styles';

const PublicPickOrderList = ({ pickOrders, handleApplyPickOrder}) => {

  return (
    <StyledPickOrders>
      <h1>Public Pick Orders</h1>
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
              <StyledLink onClick={() => handleApplyPickOrder(idx)} to={'/filter'}>{pickOrder.name}</StyledLink>
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
    </StyledPickOrders>
  )
}

export default PublicPickOrderList;
