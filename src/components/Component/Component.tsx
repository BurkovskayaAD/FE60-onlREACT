function Component({nameee, onMyClick}: {nameee: string, onMyClick: (value: string) => void}) {

    return ( 
        <>
        <div onClick={() => onMyClick("aaaa")}>{nameee}</div>
        </> 
    );
}

export default Component;