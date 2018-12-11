import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Route from './route.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import configureStore from './store/configurestore.js';
import registerServiceWorker from './serviceWorker.js';
import { Provider } from 'react-redux'



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


const store = configureStore();
ReactDOM.render(<Provider store={store}>
    <Route />
</Provider>, document.getElementById('root'));
registerServiceWorker();
