import { useState } from "react";
import "./Popup.css";
import axios from "axios";

const Popup = () => {
  const submitData = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const priority = e.target[2].value;
    if (title === "" || description === "") {
      alert("Please fill all the fields");
      return;
    }
    axios
      .post("http://localhost:8080/todo/create", {
        title: title,
        description: description,
        priority: priority,
        done: false,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="popup">
      <h4>Add a Todo</h4>
      <form onSubmit={submitData}>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Description" />
        <select>
          <option value={"HIGH"}>High</option>
          <option value={"MEDIUM"}>Medium</option>
          <option value={"LOW"}>Low</option>
        </select>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Popup;
