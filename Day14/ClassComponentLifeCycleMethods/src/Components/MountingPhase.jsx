import React from "react";
export class MountingPhase extends React.Component{
    constructor(){
        super();
        this.state={
            msg:"hello here"
        }
        console.log("Constructor : when the component is created")
    }
    componentDidMount(){
        console.log("componentdidmount phase execute")
        setTimeout(()=>{
            this.setState({
                msg:"hello there"
            })
        }, 2000)
    }
    render(){
        console.log("Render : Updating the UI")
        return(
            <>
            {this.state.msg}
            </>
        )
    }
}