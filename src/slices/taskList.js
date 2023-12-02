import { createSlice } from '@reduxjs/toolkit';

const tasklistSlice = createSlice({
  initialState: {
    tasks : []
  },
  name: 'tasklist',
  reducers: {
    add: (state, action) => {
      state.tasks.push(action.payload);

      localStorage.setItem("taskList" , JSON.stringify(state));

    },

    remove: (state, action) => {
      const ind = action.payload;
      state.tasks.splice(ind, 1);

      localStorage.setItem("taskList" , JSON.stringify(state));

    },

    update: (state, action) => {
      const ind = action.payload.ind;
      const newTask = action.payload.task;

      state.tasks.splice(ind,1,newTask)    

      localStorage.setItem("taskList" , JSON.stringify(state));

    },

    set : (state, action)=>{
        state.tasks = action.payload
    }

  },
});

export const { add, remove, update, test, set } = tasklistSlice.actions;
export default tasklistSlice.reducer;
