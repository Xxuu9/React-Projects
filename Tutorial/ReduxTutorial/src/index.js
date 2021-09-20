/* eslint-disable default-case */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';


//STORE -> GLOBALIZED STATE


//ACTION INCREMENT -> You can think of an action as an event that describes something that happened in the application.
//An action creator is a function that creates and returns an action object.
const increment = () => {
  // return {
  //     type: 'INCREMENT'
  // }
  return (
    <div className="col">
    <h1>INCREMENT</h1>
    </div>
    );
}

const decrement = () => {
  // return {
  //     type: 'DECREMENT'
  // }
  return (
    <div className="col">
    <h1>INCREMENT</h1>
    </div>

    );
}

//REDUCER -> A reducer is a function that receives the current state and an action object, 
//decides how to update the state if necessary, and returns the new state: (state, action) => newState.
const counter = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
};

let store = createStore(counter);

//Display state value in the console
store.subscribe(() => console.log(store.getState()));
//DISPATCH -> The only way to update the state is to call store.dispatch() and pass in an action object.
store.dispatch(increment())
store.dispatch(decrement())

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
