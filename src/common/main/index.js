import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reactDom from 'react-dom';
import Container from '../container';
import reducer from '../reducer';
import '../css/index.css';

const middleWare = [thunk];
if (process.env.NODE_ENV === 'development') {
    middleWare.push(createLogger())
} 

const store = createStore(reducer, applyMiddleware(...middleWare));

reactDom.render(
    <Provider store={store}>
        <Container />
    </Provider>,
document.querySelector("#root"));