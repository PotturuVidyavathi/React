import React from "react";

export class Eventbinding3 extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Apple",
            value:"its a movie name"
        }
    }
    handleevent=()=>{
        this.setState({
            value:"It is a fruit"
        })
    }

render(){
    return(
        <>
        <h1>{this.state.name}</h1>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleevent}>Click me</button>
        </>
    )
}
}