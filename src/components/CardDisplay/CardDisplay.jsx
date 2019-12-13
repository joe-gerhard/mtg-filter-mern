import React from 'react'
import { useSelector } from 'react-redux';

const CardDisplay = () => {

  const cards = useSelector(state => state.cards);

  return (
    <div>
      {cards && cards.map(card => (
        <img key={card.multiverseid} src={card.imageUrl} alt={card.name} />
      ))}
    </div>
  );
}

export default CardDisplay;