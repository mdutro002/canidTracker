import React, { Component } from 'react';
import './App.css';
import heroDog from './dogfrisbee2.jpg';
import dogDiv from './dogdisplay.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

componentDidMount(){
  fetch('https://api.thedogapi.com/v1/images/search?limit=10')
  .then(response => {
    if (!response.ok){
      console.log('error - see data');
    }
    return response.json()
  .then(data => {
      this.setState({photos: data});
    }).catch(err => {
      console.log(err.message);
    });
  }
  );
}

  render() {
   return ( <div className="mainDiv">
      <div className="heroDiv">
        <img src={heroDog} alt="dog jumping and catching frisbee"></img>
        <h1>Dogspotting the Best</h1>
      </div>
      <div id="actionDiv">
        <button onClick={this.getDog}>Sign Up</button>
        <button>Get a New Dog</button>
      </div>
        <div id="faqDiv">
          {/* This is where FAQ's go */}
        </div>
        {dogDiv}
      </div>
    );
 }
}

export default App;


//https://medium.com/@yahtzeemoomtaz/fetch-from-an-api-and-display-some-pictures-react-4de2a027eda7


/* 
API-KEY
headers: {
  'x-api-key': '5a9c88d9-ebe8-4503-8717-4c1e45904d3b'
}, 
*/

