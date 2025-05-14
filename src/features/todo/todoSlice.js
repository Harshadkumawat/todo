import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    allTodos: [],
    edit: { todo: {}, isEdit: false },
  },
  reducers: {
    addTodo: (state, action) => {
      state.allTodos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.allTodos = state.allTodos.filter(
        (todo) => todo.id !== action.payload
      );
    },
    updateTodo: (state, action) => {
      const index = state.allTodos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.allTodos[index] = action.payload;
      }
    },
    setEditTodo: (state, action) => {
      state.edit = {
        todo: action.payload,
        isEdit: true,
      };
    },
    clearEditTodo: (state) => {
      state.edit = {
        todo: {},
        isEdit: false,
      };
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, setEditTodo, clearEditTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
