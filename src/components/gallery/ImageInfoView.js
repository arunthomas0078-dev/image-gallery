import React from 'react';

const  ImageInfoView  = (props) => {
    return(
        <>
            <label className ="image-title">{props.image.title}</label>
            <p className = {`image-author ${props.additionalClass}`}>
                <span className ="font-weight-bold">Author: </span>{props.image.author}
            </p>
            <p className ={`image-description ${props.additionalClass} ${props.descriptionClass}`}>
                {props.image.description}
            </p>
        </>
    );
}

export default ImageInfoView;