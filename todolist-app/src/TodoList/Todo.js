import React from "react";
import "./Todo.css";
import Content from "./Content";

const Todo = () => {
  return (
    <div className="appad">
      <div className="app_todo" style={{ backgroundColor: "#594545" }}>
        <div className="todoList-site__header">
          <select className="listSelect" style={{ backgroundColor: "#594545" }}>
            <option value="all">My Tasks</option>
          </select>
          <a href="#">
            <i className="fa fa-minus"></i>
          </a>
        </div>
        <hr/>
        <Content />
      </div>
    </div>
  );
};

export default Todo;
