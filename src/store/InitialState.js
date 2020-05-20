import * as SessionManger from '../utils/SessionManger';

export const globalState = {    
    errorMessage: null
};

export const galleryInitialState = {
    ...globalState,
    imageList:[]
};

export const ApplicationInitialState = {
    loggedInUser: SessionManger.getItem(SessionManger.Keys.LOGGED_IN_USER)
};

  