import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: 'Learn React', completed: false },
    { id: 2, content: 'Build a React app', completed: false },
    { id: 3, content: 'Deploy the React app', completed: false },
  ]);

  const handleComplete = (id) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};


  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  );
}

export default App;