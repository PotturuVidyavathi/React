import React from "react";
export class LogicalAND1 extends React.Component{
    constructor(){
        super();
        this.state = {
            value : 45
        }
    }
    render(){
        return(
            <>
                <h1>
                {
                    this.state.value%5 === 0 && `${this.state.value} Multiple of 5`
                }
                </h1>
            </>
        )
    }
}



export class LogicalAND2 extends React.Component{
    constructor(){
        super();
        this.state = {
            value : [45, 10, 15]
        };
    }
    render(){
        return(
            <>
                
                    
                {
                    this.state.value.map((val,index) => (
                        val%5 === 0 && (
                        <h3 key={index}> {val} Multiple of 5</h3>
                        )
                    ))
                    
                }
                
            </>
        )
    }
}

