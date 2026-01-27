import axios from "axios"
import { useState, useEffect } from "react"

export function Component2(){
    const [Users, setUsers] = useState([])  //to store api data
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setUsers(res.data)
        })
        .catch((err)=>{
            console.error(err)
        })
    },[])
    return(
        <>
            <table border={1}>
                <tr>
                    <th>User ID</th>
                    <th>User Name</th>
                </tr>
               
                {Users.map((user)=>{
                    return(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                    </tr>
                    )
                })}

                    
                
            </table>
        </>
    )
}