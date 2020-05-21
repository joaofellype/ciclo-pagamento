import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import {Provider } from 'react-redux'
import { BrowserRouter} from 'react-router-dom'
import App from './authOrApp';

import promise from 'redux-promise'
import reducers from './reducers'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
const devTools =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store =applyMiddleware(multi,thunk,promise)(createStore)(reducers,devTools)
ReactDOM.render(
  
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
 
  
    
  ,
  document.getElementById('root')
);
