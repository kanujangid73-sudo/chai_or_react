import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4">
      <div className="max-w-xl mx-auto bg-gray-800/40 p-8 rounded-2xl border border-gray-700/80 shadow-2xl backdrop-blur-md">
        <h1 className="text-3xl font-extrabold text-center text-indigo-400 mb-8">
          RTK + LocalStorage Todo App
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;