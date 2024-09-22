import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import { useState } from 'react';
import { addTodoRedux, removeTodoRedux, changeTodoRedux, deleteAllTodoRedux } from './slice/todo';

interface ITodo {
  id: number,
  text: string,
  date: string,
  isChecked: boolean
}

function App() {

  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  const todos = useSelector((state: any) => state.todo);

  function addTodo() {
      if (inputText !== "") {
          let formatDate = String(new Date()).slice(4, 10);
          let todoObject = {
              id: Date.now(),
              text: inputText,
              date: formatDate,
              isChecked: false
          }
          // состояние не должно изменяться напрямую
          dispatch(addTodoRedux(todoObject))
      }
      setInputText("");
  }

  // function deleteAllTodo() {
  //     dispatch(deleteAllTodoRedux())
  // }

  function remove(id: number) {
    dispatch(removeTodoRedux(id))
  }

  function changeTodo(id: number) {
    dispatch(changeTodoRedux(id))
  }

  function countCompletedTodos() {
      return todos.todo.filter((item: ITodo) => item.isChecked).length;
  }

  return (
    <>
      <div className='container'>
        <Header
            inputText={inputText}
            setInputText={setInputText}
            addTodo={addTodo}
            deleteAllTodo={() => {
                dispatch(deleteAllTodoRedux());
            }}
            quantityPost={todos.todo.length}
            completedCount={countCompletedTodos()}></Header>
          {todos.todo.length > 0 ? (
            <div className='card-container'>
            {todos.todo.map((item: ITodo, index: number) => <Card key={index} oneTodo={item} remove={remove} changeTodo={changeTodo}></Card>)}
          </div>
          ): null}
      </div>
    </>
    
  );
}

export default App;
