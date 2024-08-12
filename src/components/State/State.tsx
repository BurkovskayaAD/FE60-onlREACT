import { useState } from 'react';
import './State.css';

function State() {

    const [content, setContent] = useState("firstContent");
    const [counter, setCounter] = useState(0);


    function handleClick() {
        setContent("seondOntent")
    }

    return ( 
        <>
        <div onClick={handleClick}>{content}</div>
        <div onClick={() => setCounter(counter + 1)}>{counter}</div>
        <div onClick={() => setCounter(counter - 1)}>-</div>
        </>
     );
}

export default State;