import React , { Component } from 'react';
import NavBarComponent from './nav.bar.component';
import routes from './routes';

export default class App extends Component{
    render(){
        return (
            <div className='container'>
                <NavBarComponent />
                <div>{routes}</div>
            </div>
        );
    }
}