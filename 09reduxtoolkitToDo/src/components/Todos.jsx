import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div className="space-y-3">
      {todos.length === 0 ? (
        <p className="text-center text-gray-400 py-4">No tasks remaining!</p>
      ) : (
        todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center bg-gray-800 px-4 py-3 rounded-lg border border-gray-700/60 shadow-sm"
          >
            <span className="text-gray-100 font-medium">{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-gray-400 hover:text-red-400 hover:bg-red-500/10 p-2 rounded-lg transition cursor-pointer font-bold"
            >
              ✕
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Todos;