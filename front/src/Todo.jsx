import { Children } from "react";
import "./Todo.css";
import { TiDeleteOutline } from "react-icons/ti";
import axios from "axios";

const Todo = ({ id, priority, title, done, children }) => {
  const getPriority = () => {
    let p = priority.toLowerCase();
    if (p === "high") {
      return <div className="high" onClick={toggleDone}></div>;
    } else if (p === "medium") {
      return <div className="medium" onClick={toggleDone}></div>;
    } else {
      return <div className="low" onClick={toggleDone}></div>;
    }
  };

  const toggleDone = () => {
    axios
      .put(`http://localhost:8080/todo/update`, {
        id: id,
        title: title,
        description: children[0],
        priority: priority,
        done: !done,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  };

  const deleteTodo = () => {
    axios.delete(`http://localhost:8080/todo/delete/${id}`).then((res) => {
      console.log(res);
      window.location.reload();
    });
  };

  return (
    <div className={!done ? "todo" : "todo done"}>
      <div className="top-container">
        <div className="left-container">
          {getPriority()}
          <h2>{title}</h2>
        </div>
        <div className="right-container">
          <TiDeleteOutline className="delete-icon" onClick={deleteTodo} />
        </div>
      </div>
      <div className="main-container">
        {Children.map(children, (child) => {
          return child;
        })}
      </div>
    </div>
  );
};

export default Todo;
