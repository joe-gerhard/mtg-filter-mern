import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Styled from './styles';

const CardPopout = () => {
  const { isCardPopoutOpen, selectedCard } = useSelector(state => state)
  const dispatch = useDispatch();

  const handleCloseCardPopout = () => {
    dispatch({ type: "CLOSE_CARD_POPOUT" })
  }

  return (
    <Styled.CardPopout onClick={handleCloseCardPopout} visible={isCardPopoutOpen}>
      <img src={selectedCard.imageUrl} alt={selectedCard.name}/>
    </Styled.CardPopout>
  )
}

export default CardPopout;
