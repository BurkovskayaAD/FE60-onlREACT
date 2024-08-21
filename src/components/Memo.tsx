import { useEffect, useMemo, useState } from "react";

function showInfo(name: string): string {
    let info =  `name is ${name}`;
    console.log(info);
    return info;
}

function Memo() {

    let [count, setCount] = useState(0);
    let [name, setName] = useState("");

    // const inputData = showInfo(name);
    const inputData = useMemo(() => showInfo(name), [name]);

    // let inputData;
    // useEffect(() => {
    //     inputData = showInfo(name)
    // }, [name])

    return ( <>
            <div>Вы кликнули {count} раз</div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>

            <input value={name} onChange={(event) => setName(event.target.value)}/>
            {inputData}
    </> );
}

export default Memo;