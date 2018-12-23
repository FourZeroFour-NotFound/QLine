
import React, { Component } from 'react';


import User from './Components/User'

import Header from './Header';
import logo from './style/qline1.jpg';


class App extends Component {
  render() {
    

    return (


     

      <div className="container center">
        <Header logo={logo} />

        {/* <User logo={logo}/> */}
        <User/>


      </div>
     
    );
  }
}

export default App;