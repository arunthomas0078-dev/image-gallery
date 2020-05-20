import {ActionTypes} from '../../actionTypes/ActionTypes';
export const actionCreators = {

  loginUser: (username, password) => async (dispatch) => {
    if(username === "test" && password === "test"){
      dispatch({type: ActionTypes.Application.LOGIN_SUCCESS, data: username});
      return true;
    }
    return false;
  },

  logoutUser: () => async (dispatch) => {
    dispatch({type:  ActionTypes.Application.LOGOUT, data: null});
  }
};

