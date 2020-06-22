import React, {Component} from 'react';
import Activity from './components/Activity';
import Authentication from './components/Authentication';
import Localization from './components/Localization';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Activity/>
        <Authentication/>
        <Localization/>
      </div>
    );
  }
}
 


export default App;
