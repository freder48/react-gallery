// imports
import React, { Component } from 'react';


// class
class GalleryForm extends Component{
    state = {
        galleryList: [],
        newImage: {
            path: '',
            alt: '',
            description: ''
          }
    }
    
    handleChange = (event, propertyName) => {
        console.log('Handling change', event.target.value);
        this.setState({
            newImage: {
                ...this.state.newImage,
                [propertyName]: event.target.value
            }
        })
      }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            galleryList: [...this.state.galleryList, this.state.newImage]
            
        })
    }


    render(){

        return(
       <>
       <form onSubmit={this.handleSubmit}>

          <label>Image Path</label> 
          <input type="text" onChange={(event) => this.handleChange(event, 'path')}></input>

          <label>Image Alt</label>
          <input type="text"onChange={(event) => this.handleChange(event, 'alt')}></input>

          <label>Image Description</label>
          <input type="text" maxLength="1000"onChange={(event) => this.handleChange(event, 'description')}></input>
          <button onClick={()=> this.props.postImage(this.state.newImage)}>Add</button>
       </form>
       
       </>

       
        ) 
    }
} 




export default GalleryForm; 