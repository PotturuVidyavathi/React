import React from "react"
export class ChildrenProps extends React.Component{
    render(){
        return(
            <>
                <h1>Children Props</h1>
                <h2>Student Details</h2>
                {this.props.children}
                <p>SId: {this.props.sid}</p>
                <p>SName: {this.props.sname}</p>
                {this.props.children}
            </>
        )
    }
}