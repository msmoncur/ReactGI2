// Import required modules
import React, { useState } from "react";
import "./styles.css"; // Include a CSS file for styling

// Main App Component
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [title, setTitle] = useState("");

  // Add a new task
  const addTask = (e) => {
    e.preventDefault();
    if (title.trim()) {
      setTasks([...tasks, { id: Date.now(), title }]);
      setTitle("");
    }
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Start editing a task
  const startEditing = (task) => {
    setEditingTask(task);
    setTitle(task.title);
  };

  // Save an edited task
  const saveTask = (e) => {
    e.preventDefault();
    if (title.trim()) {
      setTasks(tasks.map((task) => (task.id === editingTask.id ? { ...task, title } : task)));
      setEditingTask(null);
      setTitle("");
    }
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingTask(null);
    setTitle("");
  };

  return (
    <div className="app-container">
      <h1 className="title">To-Do List</h1>

      {!editingTask ? (
        <>
          <form onSubmit={addTask} className="task-form">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add a new task"
              className="input task-input"
              required
            />
            <button type="submit" className="button add-button">
              +
            </button>
          </form>

          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <span>{task.title}</span>
                <div className="actions">
                  <button
                    className="button edit-button"
                    onClick={() => startEditing(task)}
                  >
                    Edit
                  </button>
                  <button
                    className="button delete-button"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="edit-task-container">
          <h2>Edit Task</h2>
          <form onSubmit={saveTask} className="task-form">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input task-input"
              required
            />
            <div className="edit-actions">
              <button type="submit" className="button save-button">
                Save
              </button>
              <button
                type="button"
                className="button cancel-button"
                onClick={cancelEditing}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;