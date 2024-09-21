import './Header.css';

function Header({inputText, setInputText, addTodo, deleteAllTodo, quantityPost}:
    {
        inputText: string, 
        setInputText: (value: string) => void, 
        addTodo: () => void, 
        deleteAllTodo: () => void,
        quantityPost: number;
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
            <span>number of all posts: {quantityPost}</span>
            <span>number of completed posts: </span>
        </div>
    );
}

export default Header;