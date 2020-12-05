// imports
import React, { Component } from 'react';
import '../App/App.css';

// class
class GalleryItem extends Component{

    state = {
        image: true,
    }

    toggleImage = () => {
        console.log('Clicked image!');
        this.setState({
            image: !this.state.image
        })
    }

   

    render(){

        return(
        <>
        <div className="galleryContainer">
            <p>
               {this.state.image ? <button className="btnStyle" onClick={this.toggleImage}>
                <img src={this.props.image.path} alt="Josie"></img> </button> :
                <button className="btnStyle" onClick={this.toggleImage}>{this.props.image.description}</button>
               
            }
           </p>
            
           <p className="likesCounter">{this.props.image.likes} likes</p>

            <p>
            <button className="button heart"onClick={(event)=> this.props.addLike(event, this.props.image.id)}> &#9829; </button> 
            <button className="button cross"onClick={ () => this.props.deletePhoto(this.props.image.id)}>X</button>        
            </p>
        </div> 
           
           
            
        </> 
        ) // end return
    } // end render
} // end class
// export 
export default GalleryItem;