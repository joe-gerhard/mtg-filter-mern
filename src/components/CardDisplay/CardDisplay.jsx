import React from 'react'
import { useSelector } from 'react-redux';
import LoadingBar from '../LoadingBar';
import { StyledCardDisplay } from './styles';
import Tiers from './Tiers';

const CardDisplay = ({ filteredCards }) => {

  const loading = useSelector(state => state.loading);

  return (
    <StyledCardDisplay>
      {loading && <LoadingBar />}
      {filteredCards && !loading && <Tiers filteredCards={filteredCards} />}
    </StyledCardDisplay>
  );
}

export default CardDisplay;