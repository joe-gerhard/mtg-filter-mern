import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { StyledSelect } from './styles';

const SetSelector = ({ light }) => {

  const { sets, selectedSet } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch({ type: "BEGIN_LOADING" })
    dispatch({ type: "SELECT_SET", payload: e.target.value });
  }

  return (
    <StyledSelect value={selectedSet} onChange={handleChange} light={light}>
    {sets && sets.map(set => (
      <option key={set.code}>{set.code}</option>
    ))}
    </StyledSelect>
  )

  
}



export default SetSelector;