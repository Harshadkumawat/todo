import { configureStore } from "@reduxjs/toolkit";
import todos from "./todo/todoSlice";

const store = configureStore({
  reducer: {
    todos,
  },
});

export default store;
