import { useContext } from "react";
import { myContext } from "../../providers/ExampleContext";

function Test() {

    const context = useContext(myContext)
    console.log(context)

    return ( 
        <></>
     );
}

export default Test;