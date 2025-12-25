function Listrendering2(){
    const Products = [
        {
           "Name":"Trousers",
           "Price":1500 
        },{
            "Name":"Kurtasets",
           "Price":2000 
        },{
            "Name":"Handbags",
           "Price":1200 
        },{
            "Name":"Jeans",
           "Price":800 
        },{
            "Name":"Shoes",
           "Price":500 
        }]
    return(
        <div>{
        Products.map((product)=>(
            <div>
                <h1 style={{backgroundColor:"blue",color:"pink",textAlign:"center"}}>{product.Name}</h1>
                <h2 style={{backgroundColor:"pink",color:"blue",textAlign:"center"}}>{product.Price}</h2>
            </div>
        ))
    }
        </div>
    )
}
export default Listrendering2;