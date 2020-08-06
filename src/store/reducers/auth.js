import * as actionTypes from '../actions/actionTypes';

const initialState = {
  email: null,
  error: null,
  loading: false
}

const authSignUpSuccess = (state, action) => {

}
const authSignUpFail = (state, action) => {

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
