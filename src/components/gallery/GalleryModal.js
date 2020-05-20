import React from 'react';
import Popup from "reactjs-popup";
import ImageInfoView from './ImageInfoView';
import ImageInfoEdit from './ImageInfoEdit';

const GalleryModal = (props) => {
    return(
        <Popup 
            open={props.isPopupOpen}
            closeOnDocumentClick
            closeOnEscape
            onClose={props.closeModalHandler}
            contentStyle={{ width: "800px", height: "90%" }}
            modal>
            <div className="gallery-modal-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="float-right gallery-modal-close" onClick={props.closeModalHandler}><i className="fal fa-times"></i></div>              
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <img src = {props.image.url} className ="gallery-modal-image"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 py-4">
                        {props.isEdit? 
                            <ImageInfoEdit {...props}/>: 
                            <ImageInfoView 
                                additionalClass = "pt-20" 
                                descriptionClass = "image-description-modal-content"
                                image = {props.image}/>}
                    </div>
                </div>
            </div>
        </Popup>

    );
}

export default GalleryModal;