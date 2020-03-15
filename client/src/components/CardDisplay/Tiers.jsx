import React from 'react'
import Tier from './Tier';

const Tiers = ({ filteredCards }) => {
  return (
    <div>
      <Tier tier='1' filteredCards={filteredCards} />
      <Tier tier='2' filteredCards={filteredCards} />
      <Tier tier='3' filteredCards={filteredCards} />
      <Tier tier='4' filteredCards={filteredCards} />
      <Tier tier='5' filteredCards={filteredCards} />
      <Tier tier='6' filteredCards={filteredCards} />
      <Tier tier='7' filteredCards={filteredCards} />
      <Tier tier='8' filteredCards={filteredCards} />
    </div>
  )
}

export default Tiers;
