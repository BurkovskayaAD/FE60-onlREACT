import { createSlice, current } from "@reduxjs/toolkit";
import { ITodo } from "../interfaces";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todo: [],
        search: ""
    },
    reducers: {
        addTodoRedux(state: any, {payload}: {payload: any}) {
            state.todo.push(payload);
        },
        removeTodoRedux(state: any, {payload}: {payload: any}) {
            const index = state.todo.findIndex((item: ITodo) => item.id === payload)
            state.todo.splice(index, 1);

        },
        changeTodoRedux(state: any, {payload}: {payload: any}) {
            const current = state.todo.find((item: ITodo) => item.id === payload);
            if (current != undefined) {
                current.isChecked = !current.isChecked;
            }
        },
        deleteAllTodoRedux(state: any) {
            state.todo.length = 0;
        },
        setSearchRedux(state: any, {payload}: {payload: any}){
            state.search = payload;
        }

    }
})


const {actions, reducer} = todoSlice;

export default reducer;
export const {addTodoRedux, removeTodoRedux, changeTodoRedux, deleteAllTodoRedux, setSearchRedux} = actions;