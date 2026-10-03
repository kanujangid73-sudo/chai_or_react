import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Context Create Kiya
const TodoContext = createContext();

// 2. Custom Provider Component
export function TodoProvider({ children }) {
  // State Initialization with LocalStorage (Read Operation)
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    // Agar LocalStorage me data hai toh parse karke set karo, warna empty array
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Auto Save to LocalStorage (Write Operation)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); // Jab bhi 'todos' array change hoga, ye run hoga

  // Todo Add Karne Ka Function
  const addTodo = (todoText) => {
    const newTodo = {
      id: Date.now(), // Unique ID
      todo: todoText,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  // Todo Delete Karne Ka Function
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // Completed Status Toggle Function
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleComplete }}>
      {children}
    </TodoContext.Provider>
  );
}

// 3. Custom Hook (Easy Access)
export function useTodo() {
  return useContext(TodoContext);
}