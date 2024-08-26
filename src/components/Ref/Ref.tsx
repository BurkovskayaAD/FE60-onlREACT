import { useRef } from "react";

function Ref() {

    const inputRef = useRef<HTMLInputElement>(null)

    function handleClick() {
        inputRef.current?.focus();
    }

    function handleClickk() {
        inputRef.current?.blur();
    }

    return ( 
        <>
        <input ref={inputRef} />
        <button onClick={handleClick}>Focus on input</button>
        <button onClick={handleClickk}>Blur on input</button>
        </>
     );
}

export default Ref;