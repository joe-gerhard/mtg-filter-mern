import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import PageDisplay from '../components/PageDisplay';
import axios from 'axios';

const App = () => {

  const { selectedSet } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/sets')
    .then(response => {
      dispatch({ type: "SETS_LOADED", payload: response.data })
    })
  }, [dispatch]);

  useEffect(() => {
    if (selectedSet) {
      dispatch({ type: "BEGIN_LOADING"})
      axios.get(`/cards/${selectedSet}`)
      .then(response => {
        dispatch({ type: "CARDS_LOADED", payload: response.data })
      })
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
