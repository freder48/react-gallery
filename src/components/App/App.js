import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import GalleryForm from '../GalleryForm/GalleryForm'

//React interpreter is what compiles all of the code and then creates a virtual dom that has in its memory-then drops it onto an html page
// code > compiler > virtual dom (don't see) > actual dom (we see) --- any place the virtual dom has a discrepancy from the actual dom, change it on the actual dom 

class App extends Component {
state = {
  galleryList: [],
 
}

//first thing that runs, similar to readyNow, runs getGallery
//taking this component and stick it on the actual dom (like a sticker) sticker being put on the dom is everything in the render
//getGallery is an instance - alter the render due to this.state based upon response from database
//checks to see if render works, would it mount? If yes, console log and call an instance of getGallery => this will change our state => which will refresh our virtual dom
componentDidMount() {
  console.log('Component did mount');
  this.getGallery();

}

//GET
getGallery = () => {
  axios({
      method: 'GET',
      //takes us to /gallery on server.js
      url: '/gallery'
    })
    .then((response) => {
      //the info we want is in the response
      console.log('response', response.data);
      this.setState({
        //result.rows becomes the response.data
        //set the gallery array from gallery.data.js (response.data) to galleryList array in state
        galleryList: response.data //now galleryList contains our information from the database
      })
    })
    .catch((error) => {
      alert('Something bad happening in GET');
      console.log('error', error);
    })
} //end getGallery

//PUT           
addLike = (id) => {
  console.log('updating item', id);
  axios
    // communicating with our server, axios is a set of commands for express (middleware: communication code)
    .put(`/gallery//like/${id}`)
    .then((response) => {
      console.log('getting all likes');
      this.getGallery();
    })
} //end addLike

//POST 
postImage = (newImage) => {
  console.log(newImage);
  axios({
      method: 'POST',
      url: '/gallery',
      data: newImage
    })
    .then((response) => {
      //the info we want is in the response
      console.log('response', response);
      this.getGallery();

    })
    .catch((error) => {
      alert('Something bad happening');
      console.log('error', error);
    })
} //end postImage

//DELETE
deletePhoto = (id) => {
  console.log('Deleting: ', id);
  axios
    .delete(`/gallery/${id}`)
    .then((response) => {
      console.log('Deleting photo');
      this.getGallery();

    })
}//end deletePhoto


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>    
        </header>
        <GalleryForm postImage={this.postImage}/>
        <br/>
        <GalleryList image={this.state.galleryList} addLike={this.addLike} deletePhoto={this.deletePhoto}/>
      </div>
    );
  } //end render
}

export default App;
