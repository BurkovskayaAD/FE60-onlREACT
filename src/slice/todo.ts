import { createSlice, current } from "@reduxjs/toolkit";

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
        }
    }
})


const {actions, reducer} = todoSlice;

export default reducer;
export const {addTodoRedux} = actions;






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