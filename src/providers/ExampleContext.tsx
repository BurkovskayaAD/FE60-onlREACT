import { createContext, PropsWithChildren, useState } from "react";

type TContext = [string, (color: string) => void];




export const myContext = createContext<TContext>(['', () => {}]);

function ExampleContext({children} : PropsWithChildren<{}>) {
    const [color, setColor] = useState("ligth")
    return ( <>
        <myContext.Provider value={[color, setColor]}>
            {children}
        </myContext.Provider>
    </> );
}




export default ExampleContext;