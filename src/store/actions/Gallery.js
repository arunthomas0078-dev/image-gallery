
import {ActionTypes} from '../../actionTypes/ActionTypes';
import httpService from '../../utils/HttpService';
import * as GalleryServiceApi from '../../api/GalleryServiceApi';

const galleryActionCreators = {

    getImages: () => async(dispatch) => {
        let imageList = await httpService(dispatch, 
            async () => await GalleryServiceApi.getImages()
        );

        dispatch({ type: ActionTypes.Gallery.FETCH_IMAGES_SUCCESS, data: imageList });
    },

    saveImageInfo: (image) => async(dispatch) => {
        let updated = await httpService(dispatch, 
            async () => await GalleryServiceApi.saveImageInfo(image)
        );

        dispatch({type: ActionTypes.Gallery.SAVE_IMAGE_INFO_SUCCESS, data: true})
    }
}

export default galleryActionCreators;