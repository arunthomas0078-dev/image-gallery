
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import galleryReducer from './reducers/Gallery';
import applicationReducer from './reducers/Application';

const configureStore = () => {

    var rootReducer  = combineReducers({
        gallery: galleryReducer,
        application: applicationReducer
    });

    var store  = createStore(rootReducer, applyMiddleware(thunk));
    return store;
}

export default configureStore;