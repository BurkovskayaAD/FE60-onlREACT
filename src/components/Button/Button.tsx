import './Button.css';

interface IButton {
    content: string,
    buttonState: boolean,
    typeButton: string,
    functionClick: () => void
}

function Button({content, buttonState, typeButton, functionClick}: IButton) {

    

    return ( 
        <>
        <button onClick={() => functionClick()} className={typeButton} disabled={buttonState} type='button'>{content}</button>
        </>
     );
}

export default Button;