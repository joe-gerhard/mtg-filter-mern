export default function createDefaultPickOrder(cards) {
  let picks = [];

  cards.forEach((card) => {
    let pickObj = {
      name: card.name,
      pickOrder: 999,
      tier: 1, 
      imageUrl: card.imageUrl,
    }
    picks.push(pickObj);
  })
  
  return picks;
}