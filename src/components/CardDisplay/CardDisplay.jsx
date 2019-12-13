import React from 'react'
import { useSelector } from 'react-redux';
import LoadingBar from '../LoadingBar';
import { StyledCardDisplay, Card } from './styles';

const CardDisplay = () => {

  const cards = useSelector(state => state.cards);
  const loading = !(cards.length > 0)

  return (
    <StyledCardDisplay>
      {loading && <LoadingBar />}
      {cards && cards.map(card => (
        <Card key={card.multiverseid} src={card.imageUrl} alt={card.name} />
      ))}
    </StyledCardDisplay>
  );
}

export default CardDisplay;