import { useEffect, useState } from "react"


export function Updating(){
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log("count updated - ",count)
    },[count])
    return(
        <>
            <h2>Updating phase - 2</h2>
            <h2>Count - {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}
