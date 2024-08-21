import { useCallback, useEffect, useState } from "react";

function Callback() {

    // let sayHi = (message: string): void => {
    //     console.log(`Hi ` + message)
    // }

    let sayHi = useCallback((message: string): void => {
            console.log(`Hi ` + message)
    }, [])

    let [coun, setCoun] = useState(0);
    let [text, setText] = useState("start");

    useEffect(() => {
        sayHi(text)
    }, [sayHi, text])

    return ( 
        <>
            <div>Вы кликнули {coun} раз</div>
            <button onClick={() => setCoun(coun + 1)}>+</button>
            <button onClick={() => setCoun(coun - 1)}>-</button>
            </>
     );
}

export default Callback;


// useCallback(function, deps) => useMemo(() => function, deps)