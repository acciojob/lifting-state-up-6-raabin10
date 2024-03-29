import React from 'react';

const TodoList = ({ todos, onComplete }) => {
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            {!todo.completed && (
              <button onClick={() => onComplete(todo.id)}>Complete</button>
            )}
            {todo.completed && <span>Completed</span>}
          </li>
        ))}
      </ul>
    );
  };
  

export default TodoList;