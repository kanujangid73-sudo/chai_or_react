import React from 'react';
import { useTodo } from '../context/TodoContext';

function TodoItem({ todo }) {
  const { deleteTodo, toggleComplete } = useTodo(); // Context se methods fetch kiye

  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg border mb-2 transition ${
        todo.completed ? 'bg-green-50 border-green-200' : 'bg-white border-slate-200'
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="w-5 h-5 cursor-pointer accent-blue-600"
        />
        <span
          className={`font-medium ${
            todo.completed ? 'line-through text-slate-400' : 'text-slate-800'
          }`}
        >
          {todo.todo}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 font-bold text-sm px-2 py-1 rounded cursor-pointer"
      >
        ✕
      </button>
    </div>
  );
}

export default TodoItem;