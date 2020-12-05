// imports
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import '../App/App.css';
import {StylesProvider} from '@material-ui/core/styles'


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
       <StylesProvider injectFirst>
      
       <TextField className="input standard-basic" label="Image Path" value={this.state.newImage.path} type="url" onChange={(event) => this.handleChange(event, 'path')}></TextField> 
    

       <TextField className="input standard-basic" label="Image Alternative Text" value={this.state.newImage.alt} type="text"onChange={(event) => this.handleChange(event, 'alt')}></TextField>
       

        <TextField className="input standard-basic" label="Image Description" value={this.state.newImage.description} type="text" maxLength="1000"onChange={(event) => this.handleChange(event, 'description')}></TextField>
          
        </StylesProvider> 
          <button className="button tick" onClick={()=> this.props.postImage(this.state.newImage)}>+</button>

       </form>
       
       </>

       
        ) 
    }
} 




export default GalleryForm; 