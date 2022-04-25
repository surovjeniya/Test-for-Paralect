import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {compose,applyMiddleware,createStore} from 'redux'
import {rootReducer} from './redux/rootReducer'

const store = createStore(rootReducer,compose(
    applyMiddleware(thunk)
))


const root = document.getElementById('root');
ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    root
);
