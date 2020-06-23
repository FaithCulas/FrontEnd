import React, {Component} from 'react';
import Activity from './components/Activity';
import Authentication from './components/Authentication';
import Localization from './components/Localization';
import './App.css';
import {Grid, Image} from 'semantic-ui-react'

class App extends Component{
  render(){

    return (
      <React.Fragment>

        <div style={{
          display: 'flex',
          justifyContent: 'Center',
          fontSize:25
        }}>
          <Authentication/>
        </div>

        <div style={{       //first row
          display: 'flex',
          justifyContent: 'space-between',
          flex:'row'
        }}>
          <div style={{     //left sife
            display: 'flex',
            fontSize: 25,
            marginLeft: 100
          }}>
            <Activity/>
          </div>
          <div style={{     //right side
            display: 'flex',
            fontSize: 25,
            marginRight: 150
          }}>
            <Localization/>
          </div>
        </div>

        
     </React.Fragment>
        

      // <div className="App" >
      //    <Activity/>
      //    <Authentication/>
      //    <Localization/>
      // </div>
    );
    
  }
}
 


export default App;
