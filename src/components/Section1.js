import React, { Component } from 'react';
import Nav from './components/Nav.js';
import Content from './components/Content.js';
import logo from '../../public/images/ironhack-logo.svg';

const header = () => {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nav data="Welcome to React, Ironhacker!"></Nav>
        <Content data="You are ready to take this to the next level!"></Content>
      </header>
  );
}

export default header;