import React from 'react'; 
import { Switch, Route , IndexRoute } from 'react-router' ;
import HomeComponent from './home.component';
import SignupComponent from './signup.component';

const AppRoutes = () => (
  <Switch>
      <Route exact path='/' component={HomeComponent} />
      <Route path='/signup' component={SignupComponent} />
  </Switch>
)

export default (
    <Route path='/' component={AppRoutes}> </Route>
)