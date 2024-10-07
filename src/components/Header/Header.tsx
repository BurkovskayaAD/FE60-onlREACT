import './Header.css';

function Header({inputText, setInputText, searchText, addTodo, deleteAllTodo, quantityPost, completedCount, setSearch, deleteLastTodo, showCompleted, showAll, loadTodo}:
    {
        inputText: string,
        searchText: string,
        setInputText: (value: string) => void, 
        addTodo: () => void, 
        deleteAllTodo: () => void,
        quantityPost: number,
        completedCount: number,
        setSearch: (value: string) => void,
        deleteLastTodo: () => void,
        showCompleted: () => void,
        showAll: () => void,
        loadTodo: () => void
    }) {


    return (
        <div className='header'>
            <div className='header-top'>
                <button className='header__button' onClick={deleteAllTodo}>Delete All</button>
                <button className='header__button' onClick={deleteLastTodo}>Delete Last</button>
                <input placeholder='Add todo'
                       className='header__input'
                       value={inputText}
                       onChange={(event) => setInputText(event.target.value)}>
                </input>
                <button className='header__button' onClick={addTodo}>Add</button>
                <button className='header__button' onClick={loadTodo}>Load</button>
            </div>
            <div className='header-bottom'>
                <span>All: {quantityPost}</span>
                <span>Completed: {completedCount}</span>
                <button className='header__button' onClick={showAll}>Show All</button>
                <button className='header__button' onClick={showCompleted}>Show Completed</button>
                <input placeholder='Search'
                       className='header__input-search'
                       value={searchText}
                       onChange={(event) => setSearch(event.target.value)}>
                </input>
            </div>
        </div>
    );
}

export default Header;