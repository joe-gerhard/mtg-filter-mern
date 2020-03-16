export default function createDefaultPickOrder(cards) {
  let picks = [];
  let duplicates = {}

  cards.forEach((card) => {
    if(!duplicates[card.name]) {
      let pickObj = {
        name: card.name,
        pickOrder: 999,
        tier: 1, 
        imageUrl: card.imageUrl,
      }
      picks.push(pickObj);
      duplicates[card.name] = 1;
    } else {
      duplicates[card.name]++
    }
    
  })
  
  return picks;
}