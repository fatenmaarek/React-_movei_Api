
import React, { useState } from 'react';

function TodoForm({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <div className="text-center">
      <button className="btn btn-success mt-2" onClick={handleAddTask}>
        Add
      </button>
      </div>
    </div>
  );
}

export default TodoForm;
