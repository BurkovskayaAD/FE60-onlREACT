import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import { addTodoRedux, removeTodoRedux, changeTodoRedux, deleteAllTodoRedux,deleteLastRedux,searchTodo } from './slice/todo';

interface ITodo {
  id: number,
  text: string,
  date: string,
  isChecked: boolean
}

function App() {
  const dispatch = useDispatch()<any>;
  const todos = useSelector((state: any) => state.todo);


  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [amountTodos,setAmountTodos] = useState(todos.todo.length);
  const [amountComplitedTodos,setAmountComplitedTodos] = useState(todos.complitedTasks.length);

  useEffect(() => {
    setAmountTodos(todos.todo.length);
    setAmountComplitedTodos(todos.complitedTasks.length);
  },[todos]);

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
      }
      
      setInputText("");
      const input = document.querySelector<HTMLElement>('.header__input');
      input?.focus();
  }

  return (
    <>
      <div className='container'>
        <Header 
        inputText={inputText} 
        setInputText={setInputText}
        searchText={searchText}
        setSearchText={setSearchText}

        addTodo={addTodo} 
        allTask={() => dispatch(searchTodo(setSearchText('')))}
        deleteAllTodo={() => dispatch(deleteAllTodoRedux())}
        deleteLast={() => dispatch(deleteLastRedux())}// эта функция не була вызванна через callback и почему-то даже при изменении input выдавалась оишбка
        amountTodos={amountTodos}
        amountComplitedTodos={amountComplitedTodos}
        
        searchTodo={() => dispatch(searchTodo(searchText))}
        ></Header>
          
          {/* {searchText !== null ? todos.filtredTodo.map((item: ITodo, index: number) => <Card 
              key={index} 
              oneTodo={item}  
              remove={(id) => dispatch(removeTodoRedux(id))} 
              changeTodo={(id) => dispatch(changeTodoRedux(id))}></Card>) : null } */}


          {todos.todo.length > 0 && todos.filtredTodo.length === 0 ? (
            <div className='card-container'>
              {todos.todo.length === 0 ? null : todos.todo.map((item: ITodo, index: number) => <Card 
              key={index} 
              oneTodo={item} 
              remove={(id) => dispatch(removeTodoRedux(id))} 
              changeTodo={(id) => dispatch(changeTodoRedux(id))}></Card>)}
            </div>
          ): todos.filtredTodo.map((item: ITodo, index: number) => <Card 
            key={index} 
            oneTodo={item}  
            remove={(id) => dispatch(removeTodoRedux(id))} 
            changeTodo={(id) => dispatch(changeTodoRedux(id))}></Card>)}
      </div>
    </>
    
  );
}

export default App;
