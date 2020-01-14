import React from 'react'
import { useSelector } from 'react-redux';
import LoadingBar from '../LoadingBar';
import { StyledCardDisplay } from './styles';
import Tiers from './Tiers';
import isFiltered from './isFiltered';

const CardDisplay = ({ pickOrder }) => {

  const { cards, filter, loading } = useSelector(state => state);

  // if there is a pick order, apply it to the cards
  if (pickOrder && !loading) {
    pickOrder.picks.forEach(pick => {
      cards[cards.findIndex(card => card.name === pick.name)].pickOrder = pick.pickOrder;
      cards[cards.findIndex(card => card.name === pick.name)].tier = pick.tier.toString();
    })
    cards.sort((a,b) => a.pickOrder - b.pickOrder)
  }
   
  let filteredCards =[]
  cards.forEach(card => {
    const filtered = isFiltered(card, filter);
    if(!filtered) filteredCards.push(card)
  })

  return (
    <StyledCardDisplay>
      {loading && <LoadingBar />}
      {cards && !loading && <Tiers filteredCards={filteredCards} />}
    </StyledCardDisplay>
  );
}

export default CardDisplay;