import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH } from '../redux/constants';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Main from '../components/Main';
import FilterPage from './FilterPage';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import CreatePickOrderPage from './CreatePickOrderPage';
import ShowPickOrderPage from './ShowPickOrderPage';

const App = () => {

  const { selectedSet, user } = useSelector(state => state);

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
      {user.name && <Route exact path="/profile" component={ProfilePage} />}
      {user.name && <Route exact path="/pickOrders/create" component={CreatePickOrderPage} />}
      {user.name && <Route exact path="/pickOrders/:id" component={ShowPickOrderPage} />}
      <Route exact path="/" component={Main} />
      <Route path="/">
        <Redirect to='/' />
      </Route>
      } />
    </Switch>
    <Footer />
  </>
  )
}

export default App;
