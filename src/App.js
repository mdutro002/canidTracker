import React, { Component } from 'react';
import './App.css';
import heroDog from './dogfrisbee2.jpg';
import dogDiv from './dogdisplay.js';

function getDog() {
  //fetch from dogAPI
}

//render App as component

function App() {
  return (
    <div className="mainDiv">
      <div className="heroDiv">
        <img src={heroDog} alt="dog jumping and catching frisbee"></img>
        <h1>Dogspotting the Best</h1>
      </div>
      <div id="actionDiv">
        <button onClick={getDog}>Sign Up</button>
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


//https://medium.com/@yahtzeemoomtaz/fetch-from-an-api-and-display-some-pictures-react-4de2a027eda7



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

