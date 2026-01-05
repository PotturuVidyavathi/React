import { Generalprops } from './Components/Generalprops.jsx'
import { ChildrenProps } from './Components/ChildProps.jsx'


function App() {


  return (
    <>
      <Generalprops eid={1201} ename="Sundri" esalary="28000" edepartment="Python Full Stack" eemail = "sundri@gmail.com" eate={true} eskills={["HTML,CSS,Python,Django,JS"]}/>
      <Generalprops eid={1202} ename="Sundra" esalary="35000" edepartment="Data Analytics" eemail = "sundra@gmail.com" eate={true} eskills={["Python,SQL,Excel,Power BI"]}/>
      <Generalprops />
      <ChildrenProps sid={1} sname="dingi">
        <div>
          <h1>Student1</h1>
          <h2>From hyd</h2>
        </div>
      </ChildrenProps>

    </>
  )
}

export default App
