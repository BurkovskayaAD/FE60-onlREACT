import { createSlice, current } from "@reduxjs/toolkit";
import { ITodo } from "../interfaces";

const updateFilteredTodos = (state: any) => {
    state.filteredTodos = state.todo.filter((item: ITodo) =>
        item.text.toLowerCase().includes(state.search.toLowerCase())
    );
    state.all = state.filteredTodos.filter((item: ITodo) => item).length;
    state.completedCount = state.filteredTodos.filter((item: ITodo) => item.isChecked).length;
    state.completedTodos = state.filteredTodos.filter((item:ITodo) => item.isChecked);
};

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todo: [],
        search: "",
        filteredTodos: [],
        completedTodos: [],
        all: 0,
        completedCount: 0,
    },
    reducers: {
        addTodoRedux(state: any, {payload}: {payload: any}) {
            state.todo.push(payload);
            updateFilteredTodos(state);
        },
        removeTodoRedux(state: any, {payload}: {payload: any}) {
            const index = state.todo.findIndex((item: ITodo) => item.id === payload)
            state.todo.splice(index, 1);
            updateFilteredTodos(state);
        },
        changeTodoRedux(state: any, {payload}: {payload: any}) {
            const current = state.todo.find((item: ITodo) => item.id === payload);
            if (current != undefined) {
                current.isChecked = !current.isChecked;
            }
            updateFilteredTodos(state);
        },
        deleteAllTodoRedux(state: any) {
            state.todo.length = 0;
            state.filteredTodos.length = 0;
            state.completedTodos.length = 0;
            updateFilteredTodos(state);
        },
        setSearchRedux(state: any, {payload}: {payload: any}){
            state.search = payload;
            updateFilteredTodos(state);
        },
        deleteLastTodoRedux(state: any) {
            state.todo.pop();
            updateFilteredTodos(state);
        },
        toggleShowCompletedRedux(state: any){
            updateFilteredTodos(state);
        },
    }
})

const {actions, reducer} = todoSlice;

export default reducer;
export const {addTodoRedux, removeTodoRedux, changeTodoRedux, deleteAllTodoRedux, setSearchRedux, deleteLastTodoRedux, toggleShowCompletedRedux} = actions;