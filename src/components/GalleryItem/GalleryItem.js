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
           <>
               {this.state.image ? <button className="btnStyle" onClick={this.toggleImage}>
                <img src={this.props.image.path} alt="Josie"></img> </button> :
                <button className="btnStyle" onClick={this.toggleImage}>{this.props.image.description}</button>
            }
           </>
            {/* <p>{this.props.image.description}</p> */}
            

            <p>
            <button className="heartBtn"onClick={(event)=> this.props.addLike(event, this.props.image.id)}> &#9829; </button>        
            {this.props.image.likes}</p>    
        </> 
        ) // end return
    } // end render
} // end class
// export 
export default GalleryItem;