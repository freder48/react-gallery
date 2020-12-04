// imports
import React, { Component } from 'react';

// class
class GalleryItem extends Component{
    render(){
        return(
        <>
            <img src={this.props.image.path}/>
            

            
        </> 
        ) // end return
    } // end render
} // end class

// export 
export default GalleryItem;