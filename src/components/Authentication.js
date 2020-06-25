import React, {Component} from 'react';
import {Button, Image} from 'semantic-ui-react';
import './Authentication.css'

class Authentication extends Component{
  render(){
    return (
      <React.Fragment>

        <div class='center'>
          <h1>Hi Rozan</h1>
        </div>

        <div class='center'>
          <Image src='https://icons.iconarchive.com/icons/visualpharm/must-have/256/User-icon.png'/>
        </div>
        
        <div class='center'>
         <Button> Add New User </Button> 
        </div>
        
      </React.Fragment>
    );
  }
}
 


export default Authentication;
