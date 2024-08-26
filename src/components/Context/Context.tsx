import { useContext } from 'react';
import './Context.css'
import { myContext } from '../../providers/ExampleContext';

function Context() {

    const [color, setColor] = useContext(myContext);

    function changeColor() {
        setColor(color === "ligth" ? "dark" : "ligth")
        console.log(color)
    }

    return ( 
        <>
        <div className={`container-${color}`}>
            <button className={`button-${color}`} onClick={changeColor}>Сменить тему</button>
        </div>
        </>
     );
}

export default Context;