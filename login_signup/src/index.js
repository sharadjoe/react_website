import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
//The CSS file for semantic-ui
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.getElementById('root')
    );
registerServiceWorker();
