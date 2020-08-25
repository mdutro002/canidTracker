import React from 'react';
import './App.css';
import heroDog from './dogfrisbee2.jpg';
import dogDiv from './dogdisplay.js';

function getDog() {
  //fetch from dogAPI
}

function App() {
  return (
    <div className="mainDiv">
      <div className="heroDiv">
        <img src={heroDog} alt="dog jumping and catching frisbee"></img>
        <h1>Dogspotting the Best</h1>
      </div>
      <div id="actionDiv">
        <button>Sign Up</button>
        <button>Get a New Dog</button>
      </div>
      <div id="faqDiv">
        {/* This is where FAQ's go */}
      </div>
      {dogDiv}
    </div>
  );
}

export default App;


/* const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
}); */

