import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH } from '../redux/constants';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Main from '../components/Main';
import FilterPage from './FilterPage';
import LoginPage from './LoginPage';

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
    <Switch>
      <Route exact path="/filter" component={FilterPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/" component={Main} />
    </Switch>
    <Footer />
  </>
  )
}

export default App;
