import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authSignUpSuccess = (responseMessage) => {
  return {
    type: actionTypes.AUTH_SIGNUP_SUCCESS,
    error: false,
    responseMessage: responseMessage
  };
}

export const authSignUpFail = (responseMessage) => {
  return {
    type: actionTypes.AUTH_SINGUP_FAIL,
    error: true,
    responseMessage: responseMessage
  };
}

export const showLoaderSpinner = (isLoading) => {
  return {
    type: actionTypes.SHOW_LOADING_SPINNER,
    isLoading: isLoading
  };
};

export const auth = (userData) => {
  return dispatch => {
    dispatch(showLoaderSpinner(true));
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=APIKEY', userData)
        .then(response => {
          dispatch(showLoaderSpinner(false));
          dispatch(authSignUpSuccess(response.statusText));
        })
        .catch(error => {
          dispatch(showLoaderSpinner(false));
          dispatch(authSignUpFail(error.response.data.error.message));
        });
  };
}
