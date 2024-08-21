import { useEffect, useState } from "react";

function Effect() {

    let [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 5000)

        return () => clearTimeout(timer)
    }, [])

    return ( 
        <>
        {isVisible ? <div>Меня видно</div> : null}
        </>
     );
}

export default Effect;