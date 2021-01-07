//createStore-function creates the store
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/cardReducer';
//the redux-thunk-library enables us to create asynchronous actions
import thunk from 'redux-thunk';
//Redux-store and the action that changes it can be monitored from the console of the browser.
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

//callback when state is changed
store.subscribe(() => {
  //gets the current state
  //console.log(store.getState());
});

export default store;
