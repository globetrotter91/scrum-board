import React , { Component } from 'react';
import NavBarComponent from './nav.bar.component';
import routes from './routes';
import FlashMessagesComponent from './flash.messages.component';

export default class App extends Component{
    render(){
        return (
            <div className='container'>
                <NavBarComponent />
                <FlashMessagesComponent />
                <div className='page-header'>
                    
                    {routes}
                </div>
            </div>
        );
    }
}