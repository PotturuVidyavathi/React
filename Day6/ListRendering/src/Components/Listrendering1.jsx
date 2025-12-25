
function Listrendering1(){
    const movies = ["hi nanna",   "salaar", "Julay", "OG", "Avatar", "Varanasi"]
    return(
        <>
            <ul type="none">{
                movies.map((name,index)=>(
                    <li>{name}</li>
            
                ))
            }</ul>
        </>
    )
}
export default Listrendering1;


