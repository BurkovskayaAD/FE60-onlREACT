import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import { useState } from 'react';
import { addTodoRedux, removeTodoRedux, changeTodoRedux, deleteAllTodoRedux, setSearchRedux, deleteLastTodoRedux, toggleShowCompletedRedux } from './slice/todo';

interface ITodo {
  id: number,
  text: string,
  date: string,
  isChecked: boolean
}

function App() {

  const [inputText, setInputText] = useState("");
  const [searchText, setSearch] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todo);

  const filteredTodos = todos.filteredTodos || [];
  const completedCount = todos.completedCount;
  const all = todos.all;
  const completedTodos = todos.completedTodos || [];


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

  function remove(id: number) {
    dispatch(removeTodoRedux(id))
  }

  function changeTodo(id: number) {
    dispatch(changeTodoRedux(id))
  }

  function handleSearchChange(value: string) {
      setSearch(value);
      dispatch(setSearchRedux(value));
  }

  function showCompletedTodos(){
      setShowCompleted(true);
      dispatch(toggleShowCompletedRedux());
  }

  function showAllTodos() {
      setShowCompleted(false);
  }

function renderTodos() {
    const todosToRender = showCompleted ? completedTodos : filteredTodos.length > 0 ? filteredTodos : todos;

    return (
        <div className='card-container'>
            {todosToRender.map((item: ITodo, index: number) => (
                <Card key={index} oneTodo={item} remove={remove} changeTodo={changeTodo}></Card>
            ))}
        </div>
    );
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
        deleteLastTodo = {() => {
            dispatch(deleteLastTodoRedux())
        }}
        quantityPost={all}
        completedCount={completedCount}
        showAll={showAllTodos}
        showCompleted ={showCompletedTodos}
        searchText ={searchText}
        setSearch={handleSearchChange}>
    </Header>
      {todos.todo.length > 0 ? renderTodos(): null}
  </div>
</>

);
}

export default App;
