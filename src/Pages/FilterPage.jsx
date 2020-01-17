import React from 'react'
import CardDisplay from '../components/CardDisplay'
import FilterBar from '../components/FilterBar';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import isFiltered from '../util/isFiltered';

const FilterPage = () => {
  const { id } = useParams();
  const { selectedSet, loading, cards, pickOrders, filter } = useSelector(state => state);
  const dispatch = useDispatch();
  const pickOrder = pickOrders.find(p => p._id === id);

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

  // filter out cards according to the filter rules
  let filteredCards =[]
  cards.forEach(card => {
    const filtered = isFiltered(card, filter);
    if(!filtered) filteredCards.push(card)
  })

  return (
    <>
      <FilterBar />
      <CardDisplay pickOrder={pickOrder} filteredCards={filteredCards}/>
    </>
  )
}

export default FilterPage;
