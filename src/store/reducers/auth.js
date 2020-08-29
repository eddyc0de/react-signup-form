import * as actionTypes from '../actions/actionTypes';

const initialState = {
  responseMessage: 'init',
  error: false,
  isLoading: false
}

const authSignUpSuccess = (state, action) => {
  return {
    ...state,
    error: action.error,
    responseMessage: action.responseMessage
  };
}
const authSignUpFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    responseMessage: action.responseMessage
  };
}

const showLoaderSpinner = (state, action) => {
  return  {
    ...state,
    isLoading: action.isLoading
  };
};

//Manager Function
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.AUTH_SIGNUP_SUCCESS:
      return authSignUpSuccess(state, action);
      
    case actionTypes.AUTH_SINGUP_FAIL:
      return authSignUpFail(state, action);
    
    case actionTypes.SHOW_LOADING_SPINNER:
      return showLoaderSpinner(state, action);
      
    default:
      return state;
  }
}

export default reducer;
