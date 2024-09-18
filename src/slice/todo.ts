import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todo: []
    },
    reducers: {

    }
})

const {actions, reducer} = todoSlice;

export default reducer;