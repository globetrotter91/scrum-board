import React from 'react';
import { render } from 'react-dom';
import styles from './assets/index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app.component' ;

render(
<BrowserRouter>
    <div>
        <App />
    </div>
</BrowserRouter>, 
document.getElementById('app'));