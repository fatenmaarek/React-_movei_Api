
import React from 'react';
import TodoItem from './TodoItem';

function Todolist({ tasks, onToggleDone, onDeleteTask }) {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} onToggleDone={onToggleDone} onDeleteTask={onDeleteTask} />
      ))}
    </ul>
  );
}

export default Todolist;

