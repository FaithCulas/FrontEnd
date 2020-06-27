import React, {Component,useEffect,useState} from 'react';
import Activity from './components/Activity';
import Authentication from './components/Authentication';
import Localization from './components/Localization';
import './App.css';
import NavBar from './components/NavBar';

function App(){
    const butstyle = {
      marginTop: "5vh",
      width: "40vh",
      heigh: 100,
      alighnContent: "center",}

      const [activity,setActivity]=useState();
      const [user,setUser]=useState();
      const [location,setLocation]=useState();
      

      useEffect(()=>{
        fetch('/get').then(res=>res.json().then(data=>{
          console.log(data)
          setActivity(data.activity);
          setUser(data.user);
          setLocation(data.location);
        }))
      },[])

      

    return (
      <main>
      <div>
        <NavBar />
      </div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col" style={{ justifyContent: "center" }}>
            <Activity />
            {activity}
          </div>
          <div className="col">
            <Authentication />
            {user}
            <Localization />
            {location}
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
  }
 


export default App;