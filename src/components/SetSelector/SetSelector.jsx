import React from 'react'
import { useSelector } from 'react-redux';

const SetSelector = () => {

  const sets = useSelector(state => state.sets);

  return (
    <select>
    {sets && sets.map(set => (
      <option key={set.code}>{set.code}</option>
    ))}
    </select>
  )
}

export default SetSelector;