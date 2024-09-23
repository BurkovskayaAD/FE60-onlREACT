import { createSlice, current } from "@reduxjs/toolkit";
import { ITodo } from "../interfaces";

const updateFilteredTodosAndCount = (state: any) => {
    state.filteredTodos = state.todo.filter((item: ITodo) =>
        item.text.toLowerCase().includes(state.search.toLowerCase())
    );
    state.completedCount = state.todo.filter((item: ITodo) => item.isChecked).length;
};

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todo: [],
        search: "",
        filteredTodos: [],
        completedCount: 0,
    },
    reducers: {
        addTodoRedux(state: any, {payload}: {payload: any}) {
            state.todo.push(payload);
            updateFilteredTodosAndCount(state);
        },
        removeTodoRedux(state: any, {payload}: {payload: any}) {
            const index = state.todo.findIndex((item: ITodo) => item.id === payload)
            state.todo.splice(index, 1);
            updateFilteredTodosAndCount(state);
        },
        changeTodoRedux(state: any, {payload}: {payload: any}) {
            const current = state.todo.find((item: ITodo) => item.id === payload);
            if (current != undefined) {
                current.isChecked = !current.isChecked;
            }
            updateFilteredTodosAndCount(state);
        },
        deleteAllTodoRedux(state: any) {
            state.todo.length = 0;
            state.filteredTodos.length = 0;
            updateFilteredTodosAndCount(state);
        },
        setSearchRedux(state: any, {payload}: {payload: any}){
            state.search = payload;
            updateFilteredTodosAndCount(state);
        }

    }
})

const {actions, reducer} = todoSlice;

export default reducer;
export const {addTodoRedux, removeTodoRedux, changeTodoRedux, deleteAllTodoRedux, setSearchRedux} = actions;