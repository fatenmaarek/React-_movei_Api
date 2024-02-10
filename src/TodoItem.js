
import React from 'react';

function TodoItem({ task, onToggleDone, onDeleteTask }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>{task.text}</span>
      <div>
        <button className="btn btn-sm btn-success me-2" onClick={() => onToggleDone(task.id)}>
          Mark as Done
        </button>
        <button className="btn btn-sm btn-danger" onClick={() => onDeleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
