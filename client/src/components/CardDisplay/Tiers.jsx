import React from 'react'
import Tier from './Tier';

const Tiers = ({ filteredCards }) => {
  return (
    <div>
      <Tier tier='1' filteredCards={filteredCards} color="#d64040"/>
      <Tier tier='2' filteredCards={filteredCards} color="#d67a40"/>
      <Tier tier='3' filteredCards={filteredCards} color="#d6b840"/>
      <Tier tier='4' filteredCards={filteredCards} color="#7cd640"/>
      <Tier tier='5' filteredCards={filteredCards} color="#40d686"/>
      <Tier tier='6' filteredCards={filteredCards} color="#40a4d6"/>
      <Tier tier='7' filteredCards={filteredCards} color="#4540d6"/>
      <Tier tier='8' filteredCards={filteredCards} color="#ae40d6"/>
    </div>
  )
}

export default Tiers;
