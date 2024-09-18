import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import { useState } from 'react';

interface ITodo {
  id: number,
  text: string,
  date: string,
  isChecked: boolean
}

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

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
          setTodos([...todos, todoObject]);
      }
      setInputText("");
  }

  function deleteAllTodo() {
      setTodos([]);
  }

  function remove(id: number) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function changeTodo(id: number) {
    const newTodos = [...todos];
    const current = newTodos.find(item => item.id === id);
    if (current != undefined) {
      current.isChecked = !current.isChecked;
    }
    setTodos(newTodos);
  }

  return (
    <>
      <div className='container'>
        <Header inputText={inputText} setInputText={setInputText} addTodo={addTodo} deleteAllTodo={deleteAllTodo}></Header>
          {todos.length > 0 ? (
            <div className='card-container'>
            {todos.map((item, index) => <Card key={index} oneTodo={item} remove={remove} changeTodo={changeTodo}></Card>)}
          </div>
          ): null}
      </div>
    </>
    
  );
}

export default App;
