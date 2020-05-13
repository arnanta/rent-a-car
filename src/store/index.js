
/*import { createStore, combineReducers } from 'redux';
import rentals from './reducers/rentals';
import rental from './reducers/rental';

export function initStore() {
  // PURE Functions, TODO: Explain (:
  const reducers = combineReducers({
    rentals,
    rental
  });
  
  const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(reducers, reduxExtension);
  return store;
}

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rentals from './reducers/rentals';
import rental from './reducers/rental';

export function initStore() {
  const reducers = combineReducers({
    rentals,
    rental
  });
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

  return store;
}

import { createStore, combineReducers } from 'redux';
import rentals from './reducers/rentals';
import rental from './reducers/rental';

export function initStore() {
  // PURE Functions, TODO: Explain (:
  const reducers = combineReducers({
    rentals,
    rental
  });
  
  const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(reducers, reduxExtension);
  return store;
}
*/

import { createStore, combineReducers } from 'redux';
import rentals from './reducers/rentals';
import rental from './reducers/rental';

export function initStore() {
  // PURE Functions, TODO: Explain (:
  const reducers = combineReducers({
    rentals,
    rental
  });
  
  const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(reducers, reduxExtension);
  return store;
}