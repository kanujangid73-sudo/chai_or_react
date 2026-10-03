import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={addTodoHandler} className="flex gap-3 mb-6">
      <input
        type="text"
        className="bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2.5 px-4 w-full transition"
        placeholder="Write your task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-600 hover:bg-indigo-500 py-2.5 px-6 rounded-lg text-md font-semibold transition cursor-pointer shrink-0"
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTodo;