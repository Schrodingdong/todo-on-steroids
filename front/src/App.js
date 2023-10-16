import axios, { Axios } from 'axios';
import './App.css';
import Todo from './Todo';
import { useEffect, useState } from 'react';
import Popup from './Popup';
import ApiInstance from './api/ApiInstance';

function App() {
  const [todos, setTodos] = useState([]);
  const [popup, setPopup] = useState(false);

  const getTodos = () => {
    ApiInstance.get('/get')
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
        <p>To mark a todo as done, click the color icon next to the title.</p>
        <hr/>
        <div className='todo-list'>
          {todos.map(todo => {
            return <Todo id={todo.id} priority={todo.priority} title={todo.title} done={todo.done}>
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
