import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authSignUpSuccess = (errorMessage) => {
  return {
    type: actionTypes.AUTH_SIGNUP_SUCCESS,
    errorMessage: errorMessage
  };
}

export const authSignUpFail = (errorMessage) => {
  return {
    type: actionTypes.AUTH_SINGUP_FAIL,
    errorMessage: errorMessage
  };
}

export const auth = (userData) => {
  return dispatch => {
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB3c60h9E5xoWgbRo8qiS78NRM5rRpzlPs', userData)
        .then(response => {
          console.log(response);
          dispatch(authSignUpSuccess(response.statusText));
        })
        .catch(error => {
          dispatch(authSignUpFail(error.response.data.error.message));
        });
  };
}