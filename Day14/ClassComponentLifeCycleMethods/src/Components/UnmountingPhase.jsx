import React from "react"
export class UnmountingPhase extends React.Component{
    componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("Timer is running")
        },2000)
    }
    componentWillUnmount(){
        console.log("Unmounting Phase executing")
        clearInterval(this.timer)
    }
    render(){
        return(
            <>
            <h1>Component Execution</h1>
            </>
        )
    }
}