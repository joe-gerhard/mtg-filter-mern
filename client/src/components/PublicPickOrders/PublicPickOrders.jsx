import React from 'react'
import { StyledPickOrders, Table, Row, Cell, StyledLink, StyledCopyLink } from './styles';

const PublicPickOrderList = ({ user, pickOrders, handleApplyPickOrder, handleCopyPickOrder }) => {

  return (
    <StyledPickOrders>
      <h1>Public Pick Orders</h1>
      <Table>
        <Row header>
          <Cell>
            Name
          </Cell>
          <Cell></Cell>
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
              {user.name && 
                <StyledCopyLink onClick={() => handleCopyPickOrder(pickOrder)} to={'/profile'}>Copy</StyledCopyLink>
              }
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
