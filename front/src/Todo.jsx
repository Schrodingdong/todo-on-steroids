import { Children } from "react";
import "./Todo.css";
import { TiDeleteOutline } from "react-icons/ti";

const Todo = ({ priority, title, children }) => {
  const getPriority = () => {
    let p = priority.toLowerCase();
    if (p === "high") {
      return <div className="high"></div>;
    } else if (p === "medium") {
      return <div className="medium"></div>;
    } else {
      return <div className="low"></div>;
    }
  };

  return (
    <div className="todo">
      <div className="top-container">
        <div className="left-container">
          {getPriority()}
          <h2>{title}</h2>
        </div>
        <div className="right-container">
          <TiDeleteOutline className="delete-icon" />
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
