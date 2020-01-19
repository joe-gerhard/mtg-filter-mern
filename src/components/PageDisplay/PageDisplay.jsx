import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import FilterPage from '../../Pages/FilterPage';
import LoginPage from '../../Pages/LoginPage';
import ProfilePage from '../../Pages/ProfilePage';
import CreatePickOrderPage from '../../Pages/CreatePickOrderPage';
import DeletePickOrderPage from '../../Pages/DeletePickOrderPage';
import ShowPickOrderPage from '../../Pages/ShowPickOrderPage';
import Main from '../Main';
import { useSelector } from 'react-redux';
import { StyledPageDisplay } from './styles';

const PageDisplay = () => {

  const user = useSelector(state => state.user);
  
  return (
    <StyledPageDisplay>
      <Switch>
        <Route exact path="/filter" component={FilterPage} />
        <Route exact path="/login" component={LoginPage} />
        {user.name && <Route exact path="/profile" component={ProfilePage} />}
        {user.name && <Route exact path="/pickOrders/create" component={CreatePickOrderPage} />}
        {user.name && <Route exact path="/pickOrders/delete/:id" component={DeletePickOrderPage} />}
        {user.name && <Route exact path="/pickOrders/:id" component={ShowPickOrderPage} />}
        {user.name && <Route exact path="/filter/:id" component={FilterPage} />}
        <Route exact path="/" component={Main} />
        <Route path="/">
          <Redirect to='/' />
        </Route>
      </Switch>
    </StyledPageDisplay>
  )
}

export default PageDisplay;
