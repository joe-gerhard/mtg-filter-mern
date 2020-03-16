import React from 'react'
import { StyledTier, CardContainer, Card, CardDetails } from './styles'
import { useDispatch } from 'react-redux'

const Tier = ({ tier, color, filteredCards }) => {

  const dispatch = useDispatch()

  const handleOpenPopout = (card) => {
    dispatch({ type: "OPEN_CARD_POPOUT", payload: card });
  }

  return (
    <>
      <h1>Tier {tier}</h1>
      <StyledTier tier={tier} color={color}>
        {filteredCards.map(card => ( 
          <div key={card.multiverseId}>
            {card.tier === tier && 
              <CardContainer>
                <Card onClick={() => handleOpenPopout(card)} src={card.imageUrl} alt={card.name}/>
                <CardDetails>
                  <div>
                    [{card.tier}] {card.pickOrder}) {card.name}
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
