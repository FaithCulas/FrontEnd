import React from "react";
import "./App.css";
import MovieList from "./components/component";
import NavBar from "./components/navbar";
import ActivityRecognition from "./components/activity";
import Authenticate from "./components/auth";
import Localization from "./components/localization";

<<<<<<< HEAD
class App extends Component{
  render(){
    return (

      <React.Fragment >

        <Authentication/>

        <div class='bottom_row'
        style={{
          display: 'flex',
          justifycontent: 'space-between',
          flex:'row'
        }}>
          <Activity/>
          <Localization/>
        </div>
        
     </React.Fragment>
        

      // <div className="App" >
      //    <Activity/>
      //    <Authentication/>
      //    <Localization/>
      // </div>
    );
    
  }
=======
function App() {
  const butstyle = {
    marginTop: "5vh",
    width: "40vh",
    heigh: 100,
    alighnContent: "center",
  };
  return (
    <main>
      <div>
        <NavBar />
      </div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col" style={{ justifyContent: "center" }}>
            <ActivityRecognition />
          </div>
          <div className="col">
            <Authenticate />
            <Localization />
            <div>
              <button
                type="button"
                className="btn btn-primary"
                style={butstyle}
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
>>>>>>> daham
}

export default App;
