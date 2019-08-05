import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js'
import Content from './components/Content.js'
import Button from './components/Button.js'
import AllCards from './components/AllCards';


class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="Upper">
          <Nav></Nav>
          <Content></Content>
          <Button></Button>
        </div>

        <div className="Card-box">
          <AllCards></AllCards>
        </div>
      </div>
    );
  }
}

export default App;