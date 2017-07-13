import React from 'react';
import { render } from 'react-dom';
import styles from './assets/index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux' ;
import thunk from 'redux-thunk' ; 
import { createStore, applyMiddleware } from 'redux' ;
import App from './components/app.component' ;


const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <App />
            </div>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('app'));