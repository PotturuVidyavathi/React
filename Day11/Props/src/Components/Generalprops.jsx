import React from "react";

export class Generalprops extends React.Component{
    render(){
        return(
            <div>
                <h1>General Props</h1>
                <h2>Employee Details</h2>
                <p>EId: {this.props.eid}</p>
                <p>EName: {this.props.ename}</p>
                <p>ESalary: {this.props.esalary}</p>
                <p>EDepartment: {this.props.edepartment}</p>
                <p>EEmail: {this.props.eemail}</p>
                <p>EAte: {this.props.eate ? "Eaten" : "Not Eaten"}</p>
                <p>ESkills: {this.props.eskills}</p>
            </div>
        )
    }
}
