// imports
import React, { Component } from 'react';


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
           <p>
               {this.state.image ? <button onClick={this.toggleImage}>
                <img src={this.props.image.path} alt="Josie"></img> </button> :
                <button onClick={this.toggleImage}>{this.props.image.description}</button>
            }
           </p>
            <p>{this.props.image.description}</p>
            <p>{this.props.image.likes}</p>
            <button onClick={(event)=> this.props.addLike(event, this.props.image.id)}> &#9829; </button>            
        </> 
        ) // end return
    } // end render
} // end class
// export 
export default GalleryItem;