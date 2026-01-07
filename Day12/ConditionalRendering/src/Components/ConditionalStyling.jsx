
import React from "react";

export class ConditionalStyling extends React.Component{
    constructor(){
        super();
        this.state = {
            hadLunch : false
        }
    }
    render(){
        return(
            <>
            {
                this.state.hadLunch ? <p style={{color:this.state.hadLunch ? "green" : "red"}}>Healthy</p> : <p> Un Healthy</p>
            }
            </>

        )
    }
}