import React from 'react';

function Card (props) {
    return (
      <div className="Card-item">
        <img src={props.image} alt="img" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
  );
}

export default Card;