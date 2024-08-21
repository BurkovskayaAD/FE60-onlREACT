import { useEffect, useState } from "react";
import Spinner from "./Spinner/Spinner";

function Api() {

    let [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    return ( 
        <>
        {data.length == 0  ? <Spinner/> : <>{data.map((item: any) => <div key={item.id}>{item.title}</div>)}</>}
        </>
     );
}

export default Api;

