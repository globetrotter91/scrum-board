import React from 'react';
import { render } from 'react-dom';
import styles from './assets/index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux' ;
import thunk from 'redux-thunk' ; 
import { createStore, applyMiddleware, compose } from 'redux' ;
import App from './components/app.component' ;
import rootReducer from './reducers/root.reducer'; 

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
    
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