import React from "react";

export class Eventbinding1 extends React.Component{
    constructor(){
        super();
        this.state = {
            greeting: "today's date is 30/12/2025"
        }
        this.day= this.day.bind(this)
    }
    day(){
        this.setState({
            greeting:"1 more day for new year"
        })
    }
    
    render(){
        return(
            <>
                <h1>hello!!!!!!</h1>
                <h2>{this.state.greeting}</h2>
                <button onClick={this.day}>Day</button>
                
            </>
        )
    }
}