import { createSlice, nanoid } from '@reduxjs/toolkit';

// LocalStorage se pehle se saved data read karne ka helper function
const getSavedTodos = () => {
  const localData = localStorage.getItem('rtk_todos');
  return localData ? JSON.parse(localData) : [{ id: '1', text: 'Learn RTK with LocalStorage' }];
};

const initialState = {
  todos: getSavedTodos(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // 1. Todo Add Karne Ka Reducer
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      // LocalStorage me save kar rahe hain
      localStorage.setItem('rtk_todos', JSON.stringify(state.todos));
    },

    // 2. Todo Delete Karne Ka Reducer
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      // LocalStorage update kar rahe hain
      localStorage.setItem('rtk_todos', JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;