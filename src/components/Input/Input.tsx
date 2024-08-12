import { useState } from 'react';
import './Input.css';

interface IInput {
    compound: string,
    inputType: string,
    title: string,
    placeholderText: string,
    isAtive: boolean,
    errorText: string,
    isError: boolean
}

function Input({inputType, title, placeholderText, isAtive, compound, errorText, isError}: IInput) {

    const [inputText, setInputText] = useState("");

    return ( 
        <>
        <label className='label' htmlFor={compound}>{title}</label>
        <input style={{outline : isError ? "2px solid red" : "none"}} className='input' onChange={(event) => setInputText(event.target.value)} value={inputText} id={compound} disabled={isAtive} placeholder={placeholderText} type={inputType} />
        {isError ? <div className='error'>{errorText}</div> : null}
        </>
     );
}

export default Input;