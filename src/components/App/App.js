import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'

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
      galleryList: response.data
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
        <GalleryList image={this.state.galleryList}/>
      </div>
    );
  }
}

export default App;
