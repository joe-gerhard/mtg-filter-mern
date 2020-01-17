import React from 'react'
import CardDisplay from '../components/CardDisplay'
import FilterBar from '../components/FilterBar';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const FilterPage = () => {
  const { id } = useParams();
  const { selectedSet, loading, cards, pickOrders } = useSelector(state => state);
  const dispatch = useDispatch();
  const pickOrder = pickOrders.find(p => p._id === id);

  console.log(pickOrder);
  console.log(cards);
  console.log(loading);
  console.log(selectedSet);

  if(pickOrder && pickOrder.setName !== selectedSet) {
    dispatch({ type: "SELECT_SET", payload: pickOrder.setName})
  }

   // if there is a pick order, apply it to the cards
   if (pickOrder && !loading && cards.length) {
    pickOrder.picks.forEach(pick => {
      cards[cards.findIndex(card => card.name === pick.name)].pickOrder = pick.pickOrder;
      cards[cards.findIndex(card => card.name === pick.name)].tier = pick.tier.toString();
    })
    cards.sort((a,b) => a.pickOrder - b.pickOrder)
  }

  return (
    <>
      <FilterBar />
      <CardDisplay pickOrder={pickOrder} cards={cards}/>
    </>
  )
}

export default FilterPage;
