import Component from "../Component/Component";

function Container() {

    function handleeee(value: string) {
        console.log(value)
    }

    return ( 
    <>
        <Component onMyClick={handleeee} nameee="aaaa"></Component>
    </> 
    );
}

export default Container;