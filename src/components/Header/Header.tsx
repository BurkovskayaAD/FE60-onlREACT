import { useEffect, useState } from 'react';
import './Header.css';

function Header({onChangeTodo}: {onChangeTodo: any}) {

    interface ITodo {
        id: number,
        text: string,
        date: string,
        isChecked: boolean
    }

    const [inputText, setInputText] = useState("")
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        onChangeTodo(todos)
    }, [todos])

    function addTodo() {
        if (inputText !== "") {
            let formatDate = String(new Date()).slice(4, 10);
            let todoObject = {
                id: Date.now(),
                text: inputText,
                date: formatDate,
                isChecked: false
            }
            setTodos([...todos, todoObject]);
            setInputText("");
        }
    }

    function deleteAllTodo() {
        setTodos([]);
    }

    return ( 
        <div className='header'>
            <button className='header__button' onClick={deleteAllTodo}>Delete All</button>
            <input placeholder='Add todo' 
                    className='header__input' 
                    value={inputText} 
                    onChange={(e) => setInputText(e.target.value)}>
            </input>
            <button className='header__button' onClick={addTodo}>Add</button>
        </div>
     );
}

export default Header;