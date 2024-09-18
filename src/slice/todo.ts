import { createSlice, current } from "@reduxjs/toolkit";
import { ITodo } from "../interfaces";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todo: []
    },
    reducers: {
        addTodoRedux(state: any, {payload}: {payload: any}) {
            // console.log(current(state))
            // console.log(payload)
            state.todo.push(payload);
            // console.log(current(state))
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
        }
    }
})


const {actions, reducer} = todoSlice;

export default reducer;
export const {addTodoRedux, removeTodoRedux, changeTodoRedux} = actions;






// function addTodo() {
//     if (inputText !== "") {
//         let formatDate = String(new Date()).slice(4, 10);
//         let todoObject = {
//             id: Date.now(),
//             text: inputText,
//             date: formatDate,
//             isChecked: false
//         }
//         // состояние не должно изменяться напрямую
//         setTodos([...todos, todoObject]);
//     }
//     setInputText("");
// }