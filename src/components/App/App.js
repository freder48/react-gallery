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
    //takes us to /gallery on server.js
    url: '/gallery'
  })
  .then((response) => {
    //the info we want is in the response
    console.log('response', response.data);
    this.setState({
      //set the gallery array from gallery.data.js (response.data) to galleryList array in state
      galleryList: response.data
    })
  })
  .catch((error) => {
    alert('Something bad happening in GET');
    console.log('error', error);  
  })
}//end getGallery

//POST            
addLike = (event, id) => { 
  console.log('updating item', id); 
  axios
   .put(`/gallery//like/${id}`)
   .then((response) => {
      console.log('getting all likes');
      this.getGallery(); 
   })
}//end addLike

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList image={this.state.galleryList} addLike={this.addLike}/>
      </div>
    );
  }
}

export default App;
