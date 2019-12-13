import React from 'react'
import { useSelector } from 'react-redux';
import LoadingBar from '../LoadingBar';

const CardDisplay = () => {

  const cards = useSelector(state => state.cards);
  const loading = !(cards.length > 0)

  return (
    <div>
      {loading && <LoadingBar />}
      {cards && cards.map(card => (
        <img key={card.multiverseid} src={card.imageUrl} alt={card.name} />
      ))}
    </div>
  );
}

export default CardDisplay;