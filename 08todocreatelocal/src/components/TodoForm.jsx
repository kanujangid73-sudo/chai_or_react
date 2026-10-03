import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';

function TodoForm() {
  const [text, setText] = useState('');
  const { addTodo } = useTodo(); // Context se function nikala

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTodo(text);
    setText(''); // Input clear kar do
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Write a todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-500 transition cursor-pointer shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;