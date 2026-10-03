import React from 'react';
import { TodoProvider, useTodo } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

// Inner component taaki context state render ho sake
function TodoApp() {
  const { todos } = useTodo();

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-slate-800 text-center mb-6">
          Task Manager (Context + LocalStorage)
        </h1>
        <TodoForm />
        <div>
          {todos.length === 0 ? (
            <p className="text-center text-slate-400 text-sm">No tasks available!</p>
          ) : (
            todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
          )}
        </div>
      </div>
    </div>
  );
}

// Main Export
function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}

export default App;