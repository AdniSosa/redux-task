import { createSlice } from "@reduxjs/toolkit";

let taskId = 1;
const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: taskId++,
        text: action.payload
      };
      const copyTasks = [...state]
      copyTasks.push(newTask);
      return copyTasks;
      
    },
    deleteTask: (state, action) => {
        //console.log(action.payload)
      const index = state.findIndex((task) => task.id === action.payload);
      console.log(index)
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;

