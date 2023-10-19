
import React from 'react';

const Card = ({ name, photo, handleClick ,titlepara }) => {
  return (
    <div className="card" onClick={() => handleClick(photo,name,titlepara)}>
      <img src={photo} alt={name} />
      <p>{name}</p>
    
    </div>
  );
};

export default Card;
