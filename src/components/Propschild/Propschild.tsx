
interface IProps {
    children: string
}

function Propschild({children}: IProps) {
    return ( 
        <>
            <div>{children}</div>
        </>
     );
}

export default Propschild;