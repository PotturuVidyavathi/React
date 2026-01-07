import React from "react"

export class Terinary1 extends React.Component{
    constructor(){
        super()
        this.state = {
            num : 3
        }
    }
    render(){
        return(
            <>
                {
                    this.state.num % 2 != 0 ? `${this.state.num} is Odd` : `${this.state.num} is even`
                }
            </>
        )
    }
}
