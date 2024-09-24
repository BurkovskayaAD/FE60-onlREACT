import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { ITodo } from "../interfaces";

// export const fetchTodos = createAsyncThunk(
//     "todo/fetchTodos",
//     async function(_, {rejectWithValue}) {
//         try {
//             const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//             if (!response.ok) {
//                 throw new Error("Что-то пошло не так")
//             }
//             const data = await response.json();
//             return data;
//         }

//         catch (error) {
//             return rejectWithValue((error as Error).message)
//         }
//     }
// )

// export const deleteTodos = createAsyncThunk(
//     "todo/deleteTodos",
//     async function(id: number, {rejectWithValue, dispatch}) {
//         try {
//             const response = await fetch(`https://jsonplaceholder.typicode.com/todossssss/${id}`, {method: "DELETE"});
//             if (!response.ok) {
//                 throw new Error("Ошибка при удалении")
//             }
//             dispatch(removeTodoRedux(id))
//         }
        
//         catch (error) {
//             return rejectWithValue((error as Error).message)
//         }
//     }
// )

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todo: [],
        filtredTodo:[],
        complitedTasks:[],
        status: null,
        error: null
    },
    reducers: {
        addTodoRedux(state: any, {payload}: {payload: any}) {
             state.todo.push(payload);
        },

        removeTodoRedux(state: any, {payload}: {payload: any}) {
            const indexAll = state.todo.findIndex((item: ITodo) => item.id === payload)
            const indexFilter = state.filtredTodo.findIndex((item: ITodo) => item.id === payload)
            const indexComplited = state.complitedTasks.findIndex((item: ITodo) => item.id === payload)
            state.todo.splice(indexAll, 1);
            state.filtredTodo.splice(indexFilter,1);
            state.complitedTasks.splice(indexComplited,1);
            console.log(current(state.filtredTodo));

        },

        changeTodoRedux(state: any, {payload}: {payload: any}) {

            //todo massive
            const currentItem = state.todo.find((item: ITodo) => item.id === payload);
            if (currentItem !== undefined) {
                currentItem.isChecked = !currentItem.isChecked;
            }
            if(currentItem.isChecked === true){
                state.complitedTasks.push(currentItem);
            }else{
                state.complitedTasks.splice(state.complitedTasks.findIndex((item:any) => item.id === currentItem.id),1);
            }

            //filtred massive
            const currentItemfiltred = state.filtredTodo.find((item: ITodo) => item.id === payload);
            if (currentItemfiltred !== undefined) {
                currentItemfiltred.isChecked = !currentItemfiltred.isChecked;
            }
            
            
        },

        deleteAllTodoRedux(state: any) {
            state.todo.length = 0;
        },

        deleteLastRedux(state:any){
            state.todo.splice(-1,1);

        },
        searchTodo(state:any,{payload}:{payload:any}){
            if(payload !== ''){
                state.filtredTodo = state.todo.filter((item:any) => item.text.includes(payload))
            }else if(payload === ''){
                state.filtredTodo.length = 0;
            }
        }
    },


    // extraReducers: (builder) => {
    //     return builder.addCase(fetchTodos.pending, (state: any) => {
    //         state.status = "loading";
    //         state.error = null;

    //     }),
    //     builder.addCase(fetchTodos.fulfilled, (state: any, {payload}: {payload: any}) => {
    //         state.status = "resolved";
    //         state.error = null;
    //         state.todo = payload;
    //     }),
    //     builder.addCase(fetchTodos.rejected, (state: any, {payload}: {payload: any}) => {
    //         state.status = "rejected";
    //         state.error = payload;
    //         state.todo = [];
    //     }),
    //     builder.addCase(deleteTodos.rejected, (state: any, {payload}: {payload: any}) => {
    //         state.status = "rejected";
    //         state.error = payload;
    //     })
    // }
})


const {actions, reducer} = todoSlice;

export default reducer;
export const {addTodoRedux, removeTodoRedux, changeTodoRedux, deleteAllTodoRedux,deleteLastRedux,searchTodo} = actions;