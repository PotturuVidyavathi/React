import React from "react";

export class CounterApp extends React.Component{
    constructor(){
        super();
        this.state = {
            Count : 0
        }
        this.reset = this.reset.bind(this);
    }

    increment = ()=>{
        this.setState({
            Count : this.state.Count+1
        })
    }

    decrement(){
        this.setState({
            Count : this.state.Count - 1
        })
        
    }
    reset(){
        this.setState({
            Count : 0
        })
    }
    render(){
        return(
            <div className="container">
                <h1>Counter : {this.state.Count}</h1>
                <div className="btn">
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={()=>{this.decrement()}}>Decrement</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }
}