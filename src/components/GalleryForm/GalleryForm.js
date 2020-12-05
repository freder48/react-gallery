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
            newImage: {
                path: '',
                alt: '',
                description: ''
            }
        })
    }


    render(){

        return(
       <>
       <form onSubmit={this.handleSubmit}>

          <label>Image Path</label> 
          <input value={this.state.newImage.path} type="url" onChange={(event) => this.handleChange(event, 'path')}></input>

          <label>Image Alt</label>
          <input value={this.state.newImage.alt} type="text"onChange={(event) => this.handleChange(event, 'alt')}></input>

          <label>Image Description</label>
          <input value={this.state.newImage.description} type="text" maxLength="1000"onChange={(event) => this.handleChange(event, 'description')}></input>
          <button onClick={()=> this.props.postImage(this.state.newImage)}>Add</button>
       </form>
       
       </>

       
        ) 
    }
} 




export default GalleryForm; 