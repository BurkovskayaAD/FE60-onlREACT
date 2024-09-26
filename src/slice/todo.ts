import { createSlice, current } from "@reduxjs/toolkit";
import { ITodo } from "../interfaces";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todo: [],
        searchtodo: [],
        activetodo: [],
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
            if (current !== undefined) {
                current.isChecked = !current.isChecked;
            }
        },
        deleteAllTodoRedux(state: any) {
            state.todo.length = 0;
        },
        deleteLastTodoRedux(state: any) {
            state.todo.pop();
        },
        showCompletedTodoRedux(state: any) {
            state.activetodo = state.todo.filter((item: ITodo) => item.isChecked);
        },
        showAllTodoRedux(state: any) {
            state.searchtodo = [];
            state.activetodo = [];
        },
        showSearchResultsRedux(state: any, {payload}: {payload: any}) {
            state.searchtodo = payload;
        }
    }
})
const {actions, reducer} = todoSlice;

export default reducer;
export const {addTodoRedux, removeTodoRedux, changeTodoRedux, deleteAllTodoRedux, deleteLastTodoRedux, showCompletedTodoRedux, showSearchResultsRedux, showAllTodoRedux} = actions;