import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import routes from './routes';

// browserHistory
// http://www.blog.com/posts/5 - every change after .com/ will cause a re-render

// hashHistory
// http://www.blog.com/#posts/5 - every change after # will cause a re-render

// memoryHistory
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import promise from 'redux-promise';


const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history = {browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
