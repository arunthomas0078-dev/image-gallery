import {ActionTypes} from '../../actionTypes/ActionTypes';
import { ApplicationInitialState } from "../InitialState";
import * as SessionManger from '../../utils/SessionManger';

 const applicationReducer = (state = ApplicationInitialState, action) => {
    switch (action.type) {
        case ActionTypes.Application.LOGIN_SUCCESS:
            SessionManger.setItem({key: SessionManger.Keys.LOGGED_IN_USER, value: action.data})
            return { 
                ...state, 
                loggedInUser: action.data 
            };
        case ActionTypes.Application.LOGOUT:
            SessionManger.removeItem(SessionManger.Keys.LOGGED_IN_USER)
            return { 
                ...state, 
                loggedInUser: null 
            };
        default:
            return { ...state, errorMessage: null };
    }
  };

  export default applicationReducer;
  