import { useEffect, useState } from 'react';
import './Header.css';

function Header({inputText, setInputText, addTodo, deleteAllTodo,deleteLast,searchTodo,searchText,setSearchText,allTask,amountTodos,amountComplitedTodos }: 
    {
        inputText: string, 
        setInputText: (value: string) => void, 
        searchText:string,
        setSearchText:(value:string) => void,
        allTask:() => void
        addTodo: () => void, 
        deleteAllTodo: () => void,
        deleteLast:() => void,
        searchTodo:(text:any) => void,
        amountTodos:number,
        amountComplitedTodos:number;
    }) {


    return ( 

        <>
        <div className='header'>
            <button className='header__button' onClick={deleteAllTodo}>Delete All</button>
            <button className='header__button' onClick={deleteLast}>Delete Last </button>
            <input placeholder='Add todo' 
                    className='header__input' 
                    value={inputText} 
                    onChange={(e) => setInputText(e.target.value)}>
            </input>
            <button className='header__button' onClick={addTodo}>Add</button>
        </div>
        <input value={searchText} type="text" onChange={(e) => setSearchText(e.target.value)}/>
        <button onClick={searchTodo}>Search</button>
        <button onClick={allTask}>All Tasks</button>
        <span>All Tasks : {amountTodos}</span>
        <span>Complited Tasks : {amountComplitedTodos}</span>

        </>
        
     );
}

export default Header;