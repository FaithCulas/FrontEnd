import React, {Component} from 'react';
import {Form, Button, Image} from 'semantic-ui-react';

class Authentication extends Component{
  render(){
    // var myStyle = {
    //   fontSize: 100,
    //   color: '#FF0000'
    // }
    return (
      <Form>
        <Form.Field>
          <div >
            <h1>Hi Rozan</h1>
            <Image src='https://icons.iconarchive.com/icons/visualpharm/must-have/256/User-icon.png'/>
          </div>
        </Form.Field>
        
        <Form.Field>
        <Button  style={{     //right side
            fontSize: 30,
            color: 'black'
        }}>
          Add New User
        </Button> 
        </Form.Field>
      </Form>
      
    );
  }
}
 


export default Authentication;
