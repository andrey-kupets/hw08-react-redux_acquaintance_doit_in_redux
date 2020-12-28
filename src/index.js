import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";
import { Provider } from 'react-redux';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_COUNT': {
            return {...state, counter: state.counter + 1};
        }
        case 'SET_TODO': {
            return {...state, todo: action.payload};
        }
        case 'CHANGE_TODO_STATUS': {
            return {
                ...state, todo: {...state.todo, completed: !state.completed}
            };
        }
        case 'CHANGE_TODO_TITLE': {
            return {
                ...state, todo: {...state.todo, title: action.payload}
            };
        }
        default: {
            return state;
        }
    }
};


const initialState = {
    counter: 1,
    todo: {
        userId: null,
        id: null,
        title: '',
        completed: false
    }
};

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


