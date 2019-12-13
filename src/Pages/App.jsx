import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH } from '../redux/constants';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Main from '../components/Main';

const App = () => {

  const selectedSet = useSelector(state => state.selectedSet);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH.SETS })
  }, [dispatch]);

  useEffect(() => {
    if (selectedSet) {
      dispatch({ type: FETCH.CARDS, payload: selectedSet })
    }
  }, [selectedSet, dispatch])

  return (
  <>
    <Navbar />
    <Main />
    <Footer />
  </>
  )
}

export default App;
