import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name : "filter",
    initialState : {
        value : "",
        sort : false,
    },
    reducers : {
        set : (state, action) => {
            state.value = action.payload;
        },
        setSort : (state, action) =>{
            state.sort = action.payload
        }
    }
})

export const { set, setSort } = filterSlice.actions;
export default filterSlice.reducer;