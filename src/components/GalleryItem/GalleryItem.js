// imports
import React, { Component } from 'react';
import '../App/App.css';

// class
class GalleryItem extends Component{

    state = {
        image: true,
    }

    //start toggleImage
    toggleImage = () => {
        console.log('Clicked image!');
        this.setState({
            image: !this.state.image
        })
    } //end toggleImage

   

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
            {/* don't need full fledged arrow function if you dont have a parameter */}
            {/* "this" allows us to figure out what we clicked on */}
            <button className="button heart"onClick={ ()=> this.props.addLike(this.props.image.id)}> &#9829; </button> 
            <button className="button cross"onClick={ () => this.props.deletePhoto(this.props.image.id)}>X</button>        
            </p>
        </div> 
        </> 
        ) // end return
    } // end render
} // end class
// export 
export default GalleryItem;