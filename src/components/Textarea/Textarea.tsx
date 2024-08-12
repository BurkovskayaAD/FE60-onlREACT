import './Textarea.css';
import { useState } from 'react';

function Textarea({compound}: {compound: string}) {

    const [textareaText, setTextareaText] = useState("");

    return ( 
        <>
        <label htmlFor={compound} className='label'>Text</label>
        <textarea onChange={(event) => setTextareaText(event.target.value)} value={textareaText} id={compound} className='textarea'></textarea>
        </>
     );
}

export default Textarea;