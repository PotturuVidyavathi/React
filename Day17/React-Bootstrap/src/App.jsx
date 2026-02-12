import "bootstrap/dist/css/bootstrap.min.css";
import { UtilityStyling } from "./Components/UtilityStyling";

import { ReactBootstrap } from "./Components/ReactBootstrap";
import CardExample from "./Components/Cards";
import { Bootstrap } from "./Components/Bootstrap";

function App() {
  return (
    <>
    <Bootstrap />
      <ReactBootstrap />

      <div className="container mt-4">
        <div className="row g-4">

          <div className="col-lg-4 col-md-6 col-sm-12">
            <CardExample
              title="React Course"
              text="Learn React from basics to advanced level."
              // img="https://via.placeholder.com/300x180?text=React"
            />
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <CardExample
              title="JavaScript Course"
              text="Master JavaScript for frontend development."
              // img="https://via.placeholder.com/300x180?text=JavaScript"
            />
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <CardExample
              title="Python Course"
              text="Start Python programming from zero."
              // img="https://via.placeholder.com/300x180?text=Python"
            />
          </div>

        </div>
      </div>

        <UtilityStyling />

    </>
  );
}

export default App;
