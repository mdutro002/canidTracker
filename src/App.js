import React, { Component } from 'react';
import './App.css';
import heroDog from './dogfrisbee2.jpg';
import DogDiv from './dogdisplay';

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
    if (!response.ok) {
      throw Error("Error fetching! Throw more balls plz");
    }
    return response.json()
    .then(data => {
      this.setState({photos: data});
    })
    .catch(err => {
      throw Error(err.message);
    })
  })
}

  render() {
   return ( <div className="mainDiv">
      <div className="heroDiv">
        <img src={heroDog} alt="dog jumping and catching frisbee"></img>
        <h1>Dogspotting the Best</h1>
      </div>
      <div id="actionDiv">
        <button>Get a New Dog</button>
      </div>
        <DogDiv photos={this.state.photos} />
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

