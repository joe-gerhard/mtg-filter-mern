import React from 'react'
import { useSelector } from 'react-redux';
import LoadingBar from '../LoadingBar';
import { StyledCardDisplay } from './styles';
import Tiers from './Tiers';
import isFiltered from './isFiltered';

const CardDisplay = ({ cards }) => {

  const { filter, loading } = useSelector(state => state);

 
   
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