 
import React, {Component} from 'react';
import App from '../App';


class Authentication extends Component{
  
  render(){
    return (
      <React.Fragment>
        <div>
          <h1>User Authentication</h1>
          <h2 style={{ color: 'red' }}>{this.props.user}</h2>
        </div>
      </React.Fragment>
      
    );
  }
}
 


export default Authentication;