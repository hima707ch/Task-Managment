import { configureStore } from '@reduxjs/toolkit';
import tasklistSlice from './slices/taskList';
import filterSlice from './slices/filter';

const store = configureStore({
    reducer : {
        tasklist : tasklistSlice,
        filter : filterSlice
    }
})

export default store;