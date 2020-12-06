// imports
import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

// class
class GalleryList extends Component{
    render(){
        return(
        <>
        {/* image is my entire galleryList array, item is one object within the array */}
        {/* Have to pass down my addLike and deletePhoto function down to get to galleryItem.js */}
            {this.props.image.map((item) => 
                <GalleryItem image={item} key={item.id} addLike={this.props.addLike} deletePhoto={this.props.deletePhoto}/>
            )}

        </> 
        ) // end return
    } // end render
} // end class

// export 
export default GalleryList;