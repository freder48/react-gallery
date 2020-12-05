// imports
import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

// class
class GalleryList extends Component{
    render(){
        return(
        <>
            {this.props.image.map((item) => 
                <GalleryItem image={item} key={item.id} addLike={this.props.addLike} deletePhoto={this.props.deletePhoto}/>
            )}

        </> 
        ) // end return
    } // end render
} // end class

// export 
export default GalleryList;