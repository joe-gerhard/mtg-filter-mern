import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FETCH } from '../redux/constants';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Main from '../components/Main';
import SetSelector from '../components/SetSelector/SetSelector';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH.SETS })
  }, [dispatch]);

  return (
  <>
    <Navbar />
    <SetSelector />
    <Main />
    <Footer />
  </>
  )
}

export default App;
