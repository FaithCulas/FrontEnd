import React, {Component} from 'react';
import {Form, Image} from 'semantic-ui-react';
import './Localization.css'


class Localization extends Component{
  render(){
    return (

      <React.Fragment>
        <Form>
          <Form.Field>
            <div class='right'>
              <h1 >User Localization</h1>
            </div>
          </Form.Field>

          <Form.Field>
            <div class='right'>
              <Image width='300' height='300' src='https://www.mdpi.com/sensors/sensors-20-00344/article_deploy/html/images/sensors-20-00344-g001.png'/>
            </div>
          </Form.Field>

          <Form.Field>
            <div class='right'>
              <p>You are now at (x,y)</p>
            </div>    
          </Form.Field>

        </Form>

      </React.Fragment>
    );
  }
}
 


export default Localization;
