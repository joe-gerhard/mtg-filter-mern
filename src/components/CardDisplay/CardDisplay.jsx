import React from 'react'
import { useSelector } from 'react-redux';
import LoadingBar from '../LoadingBar';
import { StyledCardDisplay, Card } from './styles';

const CardDisplay = () => {

  const { cards, filter } = useSelector(state => state);
  const loading = !(cards.length > 0)

  return (
    <StyledCardDisplay>
      {loading && <LoadingBar />}
      {cards && cards.map(card => {
        let filtered = false;

        if (filter.text !== '') {
          filtered = true;
          if (card.name.toLowerCase().includes(filter.text.toLowerCase())) filtered = false;
          if (card.type.toLowerCase().includes(filter.text.toLowerCase())) filtered = false;
          if (card.text && card.text.toLowerCase().includes(filter.text.toLowerCase())) filtered = false;
        }

        card.colors.forEach(color => {
          if (!filtered) filtered = filter[color];
        });
        if (card.colors.length === 0 && filter.Colorless) filtered = true;
        if (!filtered) filtered = filter[card.rarity];

        return (
          !filtered &&
          <Card key={card.multiverseid} src={card.imageUrl} alt={card.name} />
        )
      })}
    </StyledCardDisplay>
  );
}

export default CardDisplay;