import Public, { Source } from "./Components/ImgAudVid"
import "./Components/Style.css"

function App() {

  return (
    <>
      <h1 style={{margin:"0",fontSize:"30px",fontWeight:"200",color:"lightcoral",backgroundColor:"black", textAlign:"center",padding:"15px"}}>Multimedia</h1>
      <div className="card-container">
        <div className="cards">
          <Public />
        </div>
        
        <div className="cards">
          <Source />
        </div>
        
      </div>
      
      

    </>
  )
}

export default App
