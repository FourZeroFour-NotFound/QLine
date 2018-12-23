
import React, { Component } from 'react';
import Header from './Header';
import logo from './style/qline1.jpg';

class App extends Component {
  render() {
    

    return (
      <div className="container center">
        <Header logo={logo} />
      </div>
    );
  }
}

export default App;