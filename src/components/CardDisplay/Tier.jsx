import React from 'react'
import { StyledTier, CardContainer, Card, CardDetails } from './styles'

const Tier = ({ tier, filteredCards, color }) => {
  return (
    <>
      <h1>Tier {tier}</h1>
      <StyledTier tier={tier} color={color}>
        
        {filteredCards.map(card => ( 
          <div key={card.multiverseid}>
            {card.tier === tier && 
              <CardContainer>
                <Card src={card.imageUrl} alt={card.name} />
                <CardDetails>
                  <div>
                    {card.pickOrder}) {card.name}
                  </div>
                </CardDetails>
              </CardContainer>
            }
          </div>
          )
        )}
      </StyledTier>
    </>
  )
}

export default Tier;
