import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import { useState } from 'react';
import { addTodoRedux, removeTodoRedux, changeTodoRedux, deleteAllTodoRedux, deleteLastTodoRedux, showCompletedTodoRedux, showSearchResultsRedux } from './slice/todo';

interface ITodo {
  id: number,
  text: string,
  date: string,
  isChecked: boolean
}

function App() {
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todo)

  function addTodo() {
    if (inputText !== "") {
      let formatDate = String(new Date()).slice(4, 10);
      let todoObject = {
          id: Date.now(),
          text: inputText,
          date: formatDate,
          isChecked: false
      }
      dispatch(addTodoRedux(todoObject))
      setInputText("");
    }
  }
  function remove(id: number) {
    dispatch(removeTodoRedux(id))
  }
  function changeTodo(id: number) {
    dispatch(changeTodoRedux(id))
  }
  function showSearchResults(searchText: string) {
    const filteredTodos = todos.todo.filter((item: ITodo) => 
        item.text.toLowerCase().includes(searchText.toLowerCase())
    );
    dispatch(showSearchResultsRedux(filteredTodos));
  }
  return (
    <>
      <div className='container'>
          <Header 
            inputText={inputText} 
            setInputText={setInputText} 
            addTodo={addTodo} 
            deleteAllTodo={() => dispatch(deleteAllTodoRedux())} 
            deleteLastTodo={() => dispatch(deleteLastTodoRedux())}
            showCompletedTodo={() => dispatch(showCompletedTodoRedux())}
            allTodoCount={todos.todo.length}
            completedTodoCount={todos.todo.filter((item: ITodo) => item.isChecked).length}
            searchText={searchText}
            showSearchResults={showSearchResults}
            setSearchText={setSearchText}
            ></Header>
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