import React from "react";
export class Eventbinding4 extends React.Component{
    constructor(){
        super();
        this.state={
            month:"November"

        }
    }
    newdata(){
        this.setState({
            month:"December"
        })
    }

    
    render(){
        return(
            <>
            <h1>{this.state.month}</h1>
            <button onClick={this.newdata.bind(this)}>Month</button>
            </>
        )
    }
}