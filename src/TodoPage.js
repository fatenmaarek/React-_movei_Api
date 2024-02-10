
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './Todolist';

function TodoPage() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskText) => {
    const newTask = {
      text: taskText,
      isDone: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleToggleDone = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h2 className="text-center mb-4">Todo Page</h2>
      <TodoForm onAddTask={handleAddTask} />
      <TodoList tasks={tasks} onToggleDone={handleToggleDone} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default TodoPage;
