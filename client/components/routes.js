import React from 'react'; 
import { Switch, Route , IndexRoute } from 'react-router' ;
import HomeComponent from './home/home.component';
import SignupComponent from './account/signup.component';
import LoginComponent from './account/login.component';
import ForgotPasswordComponent from './account/forgot.password.component' ;

const AppRoutes = () => (
  <Switch>
      <Route exact path='/' component={HomeComponent} />
      <Route path='/home' component={HomeComponent} />
      <Route path='/signup' component={SignupComponent} />
      <Route path='/login' component={LoginComponent} />
      <Route path='/forgot-password' component={ForgotPasswordComponent} />
  </Switch>
)

export default (
    <Route path='/' component={AppRoutes}> </Route>
)