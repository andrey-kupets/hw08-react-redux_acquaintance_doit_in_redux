import React, {useEffect} from "react";
import './App.css';
import {useSelector, useDispatch} from "react-redux";

export default function App() {
  const counter = useSelector(({counter}) => counter + 1);
    console.log(counter)
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: "SET_TODO", payload: json });
        });
  }, [counter]);

  return (
    <div className="App">
        <button onClick={() => counter}>inc</button>
        <button onClick={() => dispatch({type: 'CHANGE_TODO_STATUS'})}>change todo status</button>
        <button onClick={() => dispatch({type: "CHANGE_TODO_TITLE", payload: Math.random() })}>change todo title</button>
        <h1>Counter value: {counter}</h1>
            <>
                {/*<h2>{state.todo.id}</h2>*/}
                {/*<h2>{state.todo.title}</h2>*/}
                {/*<h2>{state.todo.completed.toString()}</h2>*/}
            </>
    </div>
  );
}

