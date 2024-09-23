import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { ITodo } from "../interfaces";

export const fetchTodos = createAsyncThunk(
    "todo/fetchTodos",
    // async function() {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    //     const data = await response.json();
    //     return data;
    // }
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            if (!response.ok) {
                throw new Error("Что-то пошло не так")
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            return rejectWithValue((error as Error).message)
        }
    }
)

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todo: [],
        status: null,
        error: null
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
        }
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
        }),
        builder.addCase(fetchTodos.rejected, (state: any, {payload}: {payload: any}) => {
            state.status = "rejected";
            state.error = payload;
            state.todo = [];
        })
    }
})


const {actions, reducer} = todoSlice;

export default reducer;
export const {addTodoRedux, removeTodoRedux, changeTodoRedux, deleteAllTodoRedux} = actions;