
import {ActionTypes} from '../../actionTypes/ActionTypes';
import {galleryInitialState} from '../InitialState';

const galleryReducer = (state = galleryInitialState, action) => {

    switch(action.type) {
        case ActionTypes.Gallery.FETCH_IMAGES_SUCCESS:
            return {
                ...state,
                imageList: action.data
            };

        case ActionTypes.Gallery.SAVE_IMAGE_INFO_SUCCESS:
            return {
                ...state,
                errorMessage: null
            };

        default:
            return {
                ...state, 
                errorMessage: null
            };
    }
}

export default galleryReducer;