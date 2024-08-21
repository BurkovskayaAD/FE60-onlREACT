import { useEffect, useState } from "react";

function State() {

    let [counter, setCounter] = useState(0);
    let [season, setSeason] = useState("summer");

    // useEffect(() => {
    //     console.log('aaaa')
    // })

    // useEffect(() => {
    //     console.log('aaaa')
    // }, [])

    useEffect(() => {
        console.log('aaaa')
    }, [season, counter])

    return ( 
        <>
            <div>Вы кликнули {counter} раз</div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>

            <div>{season}</div>
            <button onClick={() => setSeason("winter")}>Сменить сезон</button>
        </>
     );
}

export default State;