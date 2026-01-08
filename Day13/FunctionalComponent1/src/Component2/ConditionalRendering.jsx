
export function IfElse(){
    const num = 5
    if (num%2==0){
        return <h1>{num}Even number</h1>
    }
    else{
        return <h1>{num} is odd number</h1>
    }
}

export function Terinary1(){
    const isLogged = true
    return(
        <>
        {
            isLogged ? <h1>Welcome to web page</h1> : <h2>Please login</h2>
        }
        </>
    )
}

export function LogincalAND(password){
    return(
        <>
            {
                password && "Welocome to dashboard"
            }
        </>
    )
}