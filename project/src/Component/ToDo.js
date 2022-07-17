import React, { useState, useEffect } from "react";

export default function ToDo() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  // console.log({newTask})
  const addNewTask = () => {
    // "..." it is like map or for loop
    setTask([...task, newTask]);
  };
  let item = task.map((tasks) => <li key={tasks}>{tasks}</li>);
  useEffect(() => {
    console.log("didMount");
    return () => {
      console.log("willUnmount");
    };
  }, [console.log("didUpdate")]);

  return (
    <div className="ToDoList">
      <h1 className="title">TO DO LIST</h1>
      {/* this is "onChange to tack the value the uset put it" */}
        <input
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        ></input>
        <button onClick={addNewTask}>ADD TASK</button>
        {item}
    </div>
  );
}
