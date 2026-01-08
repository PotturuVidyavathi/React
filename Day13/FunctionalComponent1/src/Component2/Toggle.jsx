import { useState } from "react"

export function Toggle(){
    const [logged,setloggedIn] = useState(false)
    return(
        <>
            <h1>
                {
                    logged ? "welcome" : "Please login"
                }
            </h1>
            <button onClick={()=>{setloggedIn(!logged)}}>{logged ? "Logout" : "Login"}</button>
        </>
    )
}