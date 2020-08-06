import * as actionTypes from './actionTypes';

export const authSignUpSuccess = (email) => {
  return {
    type: actionTypes.AUTH_LOGIN_SUCCESS,
    email: email
  }
}

export const authSignUpFail = (error) => {
  return {
    type: actionTypes.AUTH_LOGIN_FAIL,
    error: error
  }
}

export const auth = (email, password) => {
  
}