
import React from 'react';

const Card = ({ name, photo, handleClick }) => {
  return (
    <div className="card" onClick={() => handleClick(photo,name)}>
      <img src={photo} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Card;
