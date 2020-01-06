import React from 'react'
import CardDisplay from '../components/CardDisplay'
import FilterBar from '../components/FilterBar';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FilterPage = () => {
  const { id } = useParams();
  const pickOrder = useSelector(state => state.pickOrders.find(p => p._id === id))

  return (
    <>
      <FilterBar />
      <CardDisplay pickOrder={pickOrder}/>
    </>
  )
}

export default FilterPage;
