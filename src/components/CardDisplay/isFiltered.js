export default function isFiltered(card, filter) {
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