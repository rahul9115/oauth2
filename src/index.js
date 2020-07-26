import fonts from '../node_modules/font-awesome/css/font-awesome.min.css'
import css from "./components/css/Header.css"

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from "./reducers"
const store = createStore(reducer, {}, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);
console.log("React Stripe Key", process.env.REACT_APP_STRIPE_KEY);
console.log("Environment is ", process.env.NODE_ENV);