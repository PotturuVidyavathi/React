import { useState } from "react"
export function PropsAndState(props){
    const [age,setAge] = useState(0)
    return(
        <>
            <p>the animale name is : {props.name}</p>
            <p>{props.name} age is {age}</p>
            <button onClick={()=>{setAge(age+1)}}>Increasing Age</button>
        </>

    )
}