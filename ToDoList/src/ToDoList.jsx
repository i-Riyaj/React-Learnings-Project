import React, { useState } from "react";
export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index - 1]] = 
      [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    const updatedTasks = [...tasks];
    if (index < updatedTasks.length-1) {

        [updatedTasks[index], updatedTasks[index + 1]] = 
        [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
  };

  return (
    <div id="To-Do-List">
      <h1>To Do List</h1>

      <div id="add-task-section">
        <input
          type="text"
          value={newTask}
          placeholder="Enter a task..."
          onChange={handleInputChange}
        />
        <button id="add-button" type="button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol id="tasks">
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>

            <div id="controls">
            <button
              type="button"
              className="move-up-button"
              onClick={() => moveTaskUp(index)}
            >
              &#8679;
            </button>

            <button
              type="button"
              className="move-down-button"
              onClick={() => moveTaskDown(index)}
            >
              &#8681;
            </button>

            <button
              type="button"
              className="delete-button"
              onClick={() => deleteTask(index)}
            >
              &#128465;
            </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
