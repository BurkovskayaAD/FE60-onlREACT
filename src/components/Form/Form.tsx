import { useState } from "react";

function Form() {

    const [inputText, setInputText] = useState("");
    const [hasError, setHasError] = useState(false);


    function handleChange(event: any) {
        setInputText(event.target.value)
        setHasError(event.target.value.trim().length === 0)
    }

    return ( 
        <>
        <label htmlFor="name">Input name</label>
        <input value={inputText} id="name" type="text" onChange={handleChange} 
        style={{border : hasError ? "1px solid red" : "1px solid black"}}></input>
        <button disabled={hasError} type="button">Send</button>
        </>
     );
}

export default Form;