import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const SetSelector = () => {

  const { sets, selectedSet } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch({ type: "SELECT_SET", payload: e.target.value });
  }

  return (
    <select value={selectedSet} onChange={handleChange}>
    {sets && sets.map(set => (
      <option key={set.code}>{set.code}</option>
    ))}
    </select>
  )

  
}



export default SetSelector;