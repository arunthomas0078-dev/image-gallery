import React from 'react';
import ImageInfoView from './ImageInfoView';

const GalleryItem = (props) => {
    return(
        <div key ={props.image.id} 
            className = "gallery-thumbnail gallery-thumbnail-container" 
            onClick = {() => props.imageClickHandler(props.image)}>
                <img src ={props.image.url} 
                     style ={{width: "100%"}}/>
                <div className="gallery-thumbnail-text">
                    <ImageInfoView {...props}/>
                </div>
        </div> 
    )
}

export default GalleryItem;