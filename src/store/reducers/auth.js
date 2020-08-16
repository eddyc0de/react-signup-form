import * as actionTypes from '../actions/actionTypes';

const initialState = {
  errorMessage: 'init',
  loading: false
}

const authSignUpSuccess = (state, action) => {
  return {
    ...state,
    errorMessage: action.errorMessage
  };
}
const authSignUpFail = (state, action) => {
  return {
    ...state,
    errorMessage: action.errorMessage
  };
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.AUTH_SIGNUP_SUCCESS:
      return authSignUpSuccess(state, action);
      
    case actionTypes.AUTH_SINGUP_FAIL:
      return authSignUpFail(state, action);
      
    default:
      return state;
  }
}

export default reducer;
