import { createSlice, nanoid } from "@reduxjs/toolkit";
import {userList} from "../../Data"

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removetodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});


export const cryptoSlice = createSlice({
    name: "users",
    initialState:'Bitcoin',
    reducers: {
      userstodo:{

      }
    },
  });

// export const { addtodo, removetodo } = todoSlice.actions;

// export default todoSlice.reducer;

export default cryptoSlice.reducer;
