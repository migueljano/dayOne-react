/* const ImageComponent = function (props) {
    // console.log(props)
    return (
        <>
            <img src={props.src} alt={props.alt} />
        </>
   
    )
}
export default ImageComponent */

import { Component } from "react";

class ImageComponent extends Component {
    render(){
        
        return(
            <img src={this.props.src} alt={this.props.alt} />
        )
    }
}

export default ImageComponent