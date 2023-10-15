import axios, { Axios } from 'axios';
import './App.css';
import Todo from './Todo';
import { useEffect, useState } from 'react';
import Popup from './Popup';

function App() {
  const [todos, setTodos] = useState([]);
  const [popup, setPopup] = useState(false);

  const getTodos = () => {
    axios.get('http://localhost:8080/todo/get')
    .then(response => {
      setTodos(response.data);
    })
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
    <div className="background"></div>
    <div className="App">
        <h1>Todo List</h1>
        <hr/>
        <div className='todo-list'>
          {todos.map(todo => {
            return <Todo priority={todo.priority} title={todo.title}>
              {todo.description}
            </Todo>
          })}
        </div>
        <button className='outline' onClick={() => setPopup(true)}>+</button>
        {
          popup ? 
          <div className='popup-wrapper' >
            <div className={"dissmisser"}onClick={() => setPopup(false)}></div>
            <Popup/>
          </div>
          : 
          null
        }
    </div>
    </>
  );
}

export default App;
