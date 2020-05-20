import {ActionTypes} from '../../actionTypes/ActionTypes';
import * as CredentialManager from '../../utils/CredentialManager';

export const actionCreators = {

  loginUser: (credential) => async (dispatch) => {

    let response = await CredentialManager.validateCredentials(credential);
    if(response){
      dispatch({type: ActionTypes.Application.LOGIN_SUCCESS, data: credential.userName});
      return true;
    }
    return false;
  },

  logoutUser: () => async (dispatch) => {
    dispatch({type:  ActionTypes.Application.LOGOUT, data: null});
  }
};

