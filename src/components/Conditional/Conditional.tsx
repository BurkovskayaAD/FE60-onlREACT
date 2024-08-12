import State from "../State/State";
import Map from "../Map/Map";

function Conditional() {

    let bool = true;

    // if(bool) {
    //     return <State></State>
    // } else {
    //     return <Map></Map>
    // }

    return (
        <>
        {bool ? <State></State> : <Map></Map>}
        {bool && <Map></Map>}
        {/* true && expression всегда вычисляется как expression, а выражение false && expression — как false */}

        </>
    )
}

export default Conditional;