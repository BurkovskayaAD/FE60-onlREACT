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

  const [arrayTodo, setArrayTodo] = useState([]);

  function handleChange(todos: any) {
    setArrayTodo(todos)
  }

  function handleRemove(id: number) {
    let newTodos = arrayTodo.filter((item: ITodo) => item.id !== id);
    setArrayTodo(newTodos)
  }

  function handleChangeTodo(id: number) {
    let newTodos = [...arrayTodo];
    let current: any = newTodos.find((item: ITodo) => item.id === id);
    if (current !== undefined) {
      current.isChecked = !current.isChecked
    }
    setArrayTodo(newTodos)
  }

  return (
    <>
      <div className='container'>
        <Header onChangeTodo={handleChange}></Header>
          {arrayTodo.length > 0 ? (
            <div className='card-container'>
            {arrayTodo.map((item, index) => <Card changeTodo={handleChangeTodo} remove={handleRemove} key={index} oneTodo={item}></Card>)}
          </div>
          ): null}
      </div>
    </>
    
  );
}

export default App;
