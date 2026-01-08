import { useState } from "react"

export function OnClick(){
    return(
        <>
            <button onClick={()=>{alert("Today is wednesday")}}> Click Here</button>
        </>

    )
}

export function OnChange(){
    const [name,setname] = useState("")
    const handleevent = (event)=>{
        setname(event.target.value)
    }
    return(
        <>
            <input type="text" placeholder="Enter your name" onChange={handleevent}></input> 
            <p>The text iam entering: {name}</p>
        </>
    )
}