import React from 'react'
import { useSelector } from 'react-redux';
import LoadingBar from '../LoadingBar';
import { StyledCardDisplay } from './styles';
import Tiers from './Tiers';

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

function isFiltered(card, filter) {
  let filtered = false;

  // determine if card is 'removed'
  if (card.pickOrder === 999) filtered = true;

  // determine if card is filtered by text
  if (filter.text !== '') {
    filtered = true;
    if (card.name.toLowerCase().includes(filter.text.toLowerCase())) filtered = false;
    if (card.type.toLowerCase().includes(filter.text.toLowerCase())) filtered = false;
    if (card.text && card.text.toLowerCase().includes(filter.text.toLowerCase())) filtered = false;
  }

  // determine if card is filtered by color
  card.colors.forEach(color => {
    if (!filtered) filtered = filter[color];
  });

  // determine if colorless cards are filtered
  if (card.colors.length === 0 && filter.Colorless) filtered = true;

  // determine if the card is filtered by rarity
  if (!filtered) filtered = filter[card.rarity];

  return filtered;
}

export default CardDisplay;