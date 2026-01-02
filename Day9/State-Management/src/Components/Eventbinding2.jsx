import React from "react";
export class Eventbinding2 extends React.Component{
    constructor(){
    super();
    this.state = {
        greet:"Hello!"
        }
    }
    handleevent(){
        this.setState({
            greet:"hi"
        })
    }
    

    render(){
        return(
            <>
            <h1>{this.state.greet}</h1>
            <button onClick={()=>{this.handleevent()}}>click here</button>
            </>
        )
    }
}
