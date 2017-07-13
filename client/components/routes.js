import React from 'react'; 
import { Switch, Route , IndexRoute } from 'react-router' ;
import HomeComponent from './home.component';
import SignupComponent from './signup.component';
import LoginComponent from './login.component';
import ForgotPasswordComponent from './forgot.password.component' ;

const AppRoutes = () => (
  <Switch>
      <Route exact path='/' component={HomeComponent} />
      <Route path='/signup' component={SignupComponent} />
      <Route path='/login' component={LoginComponent} />
      <Route path='/forgot-password' component={ForgotPasswordComponent} />
  </Switch>
)

export default (
    <Route path='/' component={AppRoutes}> </Route>
)