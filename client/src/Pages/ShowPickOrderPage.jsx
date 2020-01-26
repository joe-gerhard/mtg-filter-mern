import React from 'react'
import PickOrder from '../components/PickOrder';
import { useParams } from 'react-router-dom';

const ShowPickOrderPage = () => {
  const { id } = useParams();

  return <PickOrder id={id}/>
}

export default ShowPickOrderPage;

