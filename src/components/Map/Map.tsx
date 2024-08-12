import {films} from "../../data"

function Map() {
    return ( 
        <>
        {films.map(item => <div key={item.title}>{item.title} - {item.genre}</div>)}
        </>
     );
}

export default Map;