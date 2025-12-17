/*================ CASE 1 ==============*/
/* =======  CASE:1 Writing the JS code outside the Component ====*/

// var name = "Sundari"
// var age = 32
// var city = "Hyderabad"

// function App() {

//   return (
//     <>
//       <div>
//         <h1>Hello, Everyone</h1>
//         <h3>The Name is {name} and age is {age} from {city}</h3>
//       </div>
//     </>
//   )
// }

// export default App


/* ===================== CASE 2 ================== */
/* ===== writing the JS Code inside the component ===== */

// function App(){
  
//   var name = "Sundra"
//   var age = 12
//   var city = "Banglore"

//   return (
//     <>
//       <div>
//         <h1>HI</h1>
//         <p>I am {name} from {city}</p>
//       </div>
//     </>
//   )
// }

// export default App;

/* =============== CASE 3 ========== */
/* Writing the JS code inside the JSX */
/* declaring and assigning with in the JSX code is not possible */


//  function App(){
  

//   return (
//     <>
//       <div>
//         <h1>HI</h1>
//         <p>I am {var name = "Sundra"} from {var city = "Banglore"}</p>
//       </div>
//     </>
//   )
// }

// export default App;



/* =============== CASE 4 =============== */
/* How to access the values in the form of Objects */


// function App(){
  
//   var details = {
//     "name" : "dinga",
//     "age" :25,
//     "city":"chennai"
//   }

//   return (
//     <div>
//       <h1>Hello! Sundra</h1>
//       <h2>Iam {details.name} from {details.city}</h2>
//     </div>
//   )
// }

// export default App;



/* ================ Adding CSS into REACT ========== */

/* ============ CASE 1 ============= */
/* Creating a external file with .css extension */


// function App(){
//   return (
//     <div>
//       <h1 className="head">Heading Tags</h1>
//       <p className="para">Paragraph tags</p>
//     </div>
//   )
// }

// export default App;


/* ============= CASE 2 ========== */
/*  Internal Css */

// function App(){
//   return (
//     <div>
//       <h3 style={{color:"pink",bachgroundColor:"black"}}>Today is tuesday</h3>
//       <h5 style={{color:"blue", backgroundColor:"pink"}}>Tomorrow is Wednesday</h5>
//     </div>
//   )
// }

// export default App;


/* ========== CASE 3 ========== */
/* Styling the element by using the objects */

// var styling = {
//   backgroundColor:"red",
//   color:"white",
//   textAlign:"center",
//   padding:"50px"
// }

// function App() {
//   return (
//     <div>
//       <h1 style={styling}>Sunday is Holiday</h1>
//     </div>
//   )
// }

// export default App;