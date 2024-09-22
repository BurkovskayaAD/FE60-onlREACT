import './Header.css';

function Header({inputText, setInputText, searchText, addTodo, deleteAllTodo, quantityPost, completedCount, setSearch}:
    {
        inputText: string,
        searchText: string,
        setInputText: (value: string) => void, 
        addTodo: () => void, 
        deleteAllTodo: () => void,
        quantityPost: number;
        completedCount: number;
        setSearch: (value: string) => void
    }) {


    return (
        <div className='header'>
            <div className='header-top'>
                <button className='header__button' onClick={deleteAllTodo}>Delete All</button>
                <input placeholder='Add todo'
                       className='header__input'
                       value={inputText}
                       onChange={(e) => setInputText(e.target.value)}>
                </input>
                <button className='header__button' onClick={addTodo}>Add</button>
            </div>
            <div className='header-bottom'>
                <span>number of all posts: {quantityPost}</span>
                <span>number of completed posts: {completedCount}</span>
                <input placeholder='Search'
                       className='header__input-search'
                       value={searchText}
                       onChange = {(event) => setSearch(event.target.value)}>
                </input>
            </div>
        </div>
    );
}

export default Header;