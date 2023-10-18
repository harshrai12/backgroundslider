// App.js
import React, { useState } from 'react';
import Card from './card';
import './App.css';

const App = () => {
  const [backgroundphoto, setBackgroundphoto] = useState();
  const [title,settitle]=useState("Card1");
  const handleClick = (photo,name) => {
    setBackgroundphoto(`url(${photo})`);
    settitle(name)
  };
  const cardData = [
    { name: 'Card 1', photo: 'https://images.unsplash.com/photo-1682685797743-3a7b6b8d8149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60' },
    { name: 'Card 2', photo: 'https://images.unsplash.com/photo-1696935369633-eeb7ba94b92d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60' },
    { name: 'Card 3', photo: 'https://images.unsplash.com/photo-1697015357114-a30b4ee51659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
    { name: 'Card 4', photo: 'https://images.unsplash.com/photo-1696321832484-a6dd920e0981?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
    { name: 'Card 5', photo: 'https://images.unsplash.com/photo-1695891957303-b65ece769f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80' },
  ];

  return (
    <div className="app" style={{ backgroundImage: backgroundphoto }}
    > <div className="imagename">
     <h1>{title}</h1>
    </div>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card key={index} name={card.name} photo={card.photo} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default App;

