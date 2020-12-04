import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
state = {
  galleryList: [],
}

componentDidMount() {
  console.log('Component did mount');
  this.getGallery();
  
}

//start getGallery
getGallery= () => {
  axios({
    method: 'GET', 
    url: '/gallery'
  })
  .then((response) => {
    //the info we want is in the response
    console.log('response', response.data);
    this.setState({
      groceryList: response.data
    })
    
  })
  .catch((error) => {
    alert('Something bad happening in GET');
    console.log('error', error);  
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
      </div>
    );
  }
}

export default App;
