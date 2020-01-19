import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH } from '../redux/constants';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import PageDisplay from '../components/PageDisplay';

const App = () => {

  const { selectedSet } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH.SETS })
  }, [dispatch]);

  useEffect(() => {
    if (selectedSet) {
      dispatch({ type: "BEGIN_LOADING"})
      dispatch({ type: FETCH.CARDS, payload: selectedSet })
    }
  }, [selectedSet, dispatch])

  return (
  <>
    <Navbar />
    <PageDisplay />
    <Footer />
  </>
  )
}

export default App;
