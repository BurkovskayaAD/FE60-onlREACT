import { useEffect, useState } from 'react';
import './Header.css';

function Header({inputText, setInputText, addTodo, deleteAllTodo, loadTodo}: 
    {
        inputText: string, 
        setInputText: (value: string) => void, 
        addTodo: () => void, 
        deleteAllTodo: () => void,
        loadTodo: () => void
    }) {


    return ( 
        <div className='header'>
            <button className='header__button' onClick={deleteAllTodo}>Delete All</button>
            <input placeholder='Add todo' 
                    className='header__input' 
                    value={inputText} 
                    onChange={(e) => setInputText(e.target.value)}>
            </input>
            <button className='header__button' onClick={addTodo}>Add</button>
            <button className='header__button' onClick={loadTodo}>Load</button>
        </div>
     );
}

export default Header;