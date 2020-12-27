import React, {useEffect} from "react";
import './App.css';
import {useSelector, useDispatch} from "react-redux";

export default function App() {
  // const counter = useSelector(({counter}) => counter);
  const state = useSelector((state) => state);
  const {counter} = state;
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
        .then((response) => response.json())
        .then(data => {
            dispatch({ type: "SET_TODO", payload: data });
        });
  }, [counter,dispatch]);

  return (
    <div className="App">
        <button onClick={() => dispatch({type: 'CHANGE_COUNT'})}>inc</button>
        <button onClick={() => dispatch({type: 'CHANGE_TODO_STATUS'})}>change todo status</button>
        <button onClick={() => dispatch({type: "CHANGE_TODO_TITLE", payload: Math.random() })}>change todo title</button>
        <h1>Counter value: {counter}</h1>
            <>
                <h2>{state.todo.id}</h2>
                <h2>{state.todo.title}</h2>
                <h2>{state.todo.completed.toString()}</h2>
            {/* почему статус completed меняется только c фолс на тру, а наоборот - нет ?? */}
            </>
    </div>
  );
}

