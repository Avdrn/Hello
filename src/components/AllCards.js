import React, { Component } from 'react';
import Card from './SingleCard';
// import image1 from '../../images/icon1.png';
// import image2 from '../../images/icon2.png';
// import image3 from '../../images/icon3.png';
// import image4 from '../../images/icon4.png';


function AllCards () {
  return (
      <div className="Card-box">
        <Card image="../../images/icon1.png" title="Declarative" description="React make it painless to create interactive UIs" />
        <Card image="../../images/icon2.png" title="Component" description="Build encapsulated component and manage their state"/>
        <Card image="../../images/icon3.png" title="Single-way" description="A set of immuable value are passed to the component"/>
        <Card image="../../images/icon4.png" title="JSX" description="Statically-typed designed to run on modern browser"/>

      </div>
  );
}

export default AllCards;