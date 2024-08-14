import React from "react";

class LifeCycle extends React.Component<any, any> {

    timerId: any;

    constructor(props: any) {
        super(props);
        this.state = {date: new Date()};
        console.log("construtor")
    }

    componentDidMount(): void {
        console.log("componentDidMount")
        this.timerId = setInterval(() => this.tick(), 1000)
    }

    componentDidUpdate(): void {
        console.log("componentDidUpdate")
    }

    componentWillUnmount(): void {
        clearInterval(this.timerId);
        console.log("componentWillUnmount")
    }

    tick() {
        this.setState({date: new Date()})
    }

    render() { 
        console.log("render")
        return ( 
            <>
            <h1>Hello world</h1>
            <h2>{this.state.date.toLocaleTimeString()}</h2>
            </>
         );
    }
}
 
export default LifeCycle;