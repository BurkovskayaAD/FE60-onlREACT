import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {ITodo} from "../interfaces";

export const fetchTodos = createAsyncThunk(
    "todo/fetchTodos",
    async function (){
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        return await response.json();
    }
)

const updateFilteredTodos = (state: any) => {
    state.filteredTodos = state.todo.filter((item: ITodo) =>
        item.title?.toLowerCase().includes(state.search.toLowerCase())
    );
    state.all = state.filteredTodos.filter((item: ITodo) => item).length;
    state.completedCount = state.filteredTodos.filter((item: ITodo) => item.completed).length;
    state.completedTodos = state.filteredTodos.filter((item:ITodo) => item.completed);
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
        status: null,
        error: null
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
    },
    extraReducers: (builder) => {
        return builder.addCase(fetchTodos.pending, (state: any) => {
            state.status = "loading";
            state.error = null;
        }),
        builder.addCase(fetchTodos.fulfilled, (state: any, {payload}: {payload: any}) => {
            state.status = "resolved";
            state.error = null;
            state.todo = payload;
            updateFilteredTodos(state);
        })
    }
})

const {actions, reducer} = todoSlice;

export default reducer;
export const {addTodoRedux, removeTodoRedux, changeTodoRedux, deleteAllTodoRedux, setSearchRedux, deleteLastTodoRedux, toggleShowCompletedRedux} = actions;