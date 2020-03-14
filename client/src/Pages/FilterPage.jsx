import React from 'react'
import CardDisplay from '../components/CardDisplay'
import FilterBar from '../components/FilterBar';
import { useSelector, useDispatch } from 'react-redux';
import isFiltered from '../util/isFiltered';

const FilterPage = () => {
  const { selectedSet, loading, cards, selectedPickOrder: pickOrder, filter } = useSelector(state => state);
  const dispatch = useDispatch();
  
  if(pickOrder && pickOrder.setName !== selectedSet) {
    dispatch({ type: "SELECT_SET", payload: pickOrder.setName})
  }

  // if there is a pick order, apply it to the cards
  if (pickOrder && !loading && cards[0].set === pickOrder.setName) {
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
