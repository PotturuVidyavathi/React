import { useState } from "react"
import "./Style.css"

export function InLineStyle(){
    const [login,setlogin] = useState(true)

    return(
        <>
            <h1 style={{color: login? "green" : "red",backgroundColor: login? "orange" : "green",textAlign:"center"}}>{
                login ? "Welcome" : "Log"
            }
            </h1>
            <button onClick={()=>{setlogin(!login)}}    className= {login? "btn1" : "btn2"}>
                {
                    login ? "Logout" : "Login"
                }
            </button>
            
        </>
    )
}