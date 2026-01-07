import React from "react";

export class Ifelse1 extends React.Component{
    constructor(){
        super();
        this.state = {
            value : 10
        }

    }
    render(){
        // <h1>if else statements using class based Component</h1>
        if (this.state.value%2 === 0){
            return <h3>Even</h3>
        }
        else{
            return <h3>Odd</h3>
        }
    }
}


export class Ifelse2 extends React.Component{
    constructor(){
        super();
        this.state = {
            isLogged : true
        }

    }
render() {
    let message;

    if (this.state.isLogged) {
        message = <h3>Logged Successfully</h3>;
    } else {
        message = <h3>Please Login</h3>;
    }

    return (
        <>
            <h1>if else statements using class based Component</h1>
            {message}
        </>
    );
}

}



