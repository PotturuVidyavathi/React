import { useEffect } from "react"

export function Mounting(){
    useEffect((()=>{
        console.log("Mounting Phase - 1")
    }),[])
    return(
        <>
            <h1>Mounting Phase</h1>
        </>
    )
}