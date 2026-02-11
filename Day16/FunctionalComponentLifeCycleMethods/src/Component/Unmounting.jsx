import { useEffect, useState } from "react"


export function Unmouting(){
    const [count,setCount] = useState(0)
    
    // updating
    useEffect(()=>{
        console.log("Count : ",count)
    },[count])

    // unmounting
    useEffect(()=>{
        return ()=>{
            console.log("Unmounting Phase - 3")
        }
    },[])
    return(
        <>
            <h2>Updating phase</h2>
            <h2>count : {count}</h2>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </>
    )
}