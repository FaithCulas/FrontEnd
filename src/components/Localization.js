import React, {Component} from 'react';
import {Image} from 'semantic-ui-react';


class Localization extends Component{
  render(){
    return (
      <div >
        <h1 >User Localization</h1>
        <Image width='300' height='300' src='https://www.mdpi.com/sensors/sensors-20-00344/article_deploy/html/images/sensors-20-00344-g001.png'/>
        <p>You are now at (x,y)</p>
      </div>
    );
  }
}
 


export default Localization;
