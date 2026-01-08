import { useState } from "react"

export function Inline(){
    const [count,setcount] = useState(0)
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>{
            setcount(count+1)
        }}>Increment</button>
        
        </>
    )
}

export function External(){
    const [count,setcount] = useState(0)
    function decrement(){
        setcount(count - 1)
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

export function Argument(){
    const greet = (name) => alert(`hello ${name}`)
    return(
        <>
            <h1>Click below to display alert messge</h1>
            <button onClick={()=>{greet("Winner winner chicken dinner")}}>Msg</button>        

        </>
    )
}