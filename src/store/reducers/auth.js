import {
  IS_LOGGED_REQUEST,
  IS_LOGGED_SUCCESS,
  IS_LOGGED_FAILURE,
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
  isLoading: true,
  isLoggedIn: false,
  isSign: false,

  user: undefined,
  loadingUpdate: false,
};

const auth = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case IS_LOGGED_REQUEST:
      return {...state, isLoading: true, isLoggedIn: false, isSign:false};
    case IS_LOGGED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: payload.user,
      };
    case IS_LOGGED_FAILURE:
      return {...state, isLoading: false, isLoggedIn: false};
    case 'IS_SIGNED' :
      return {...state, isSign:false}
    case LOGIN_USER_SUCCESS:
      return {...state, user: payload.user, isLoggedIn: true, isSign:false};

    case SIGNUP_USER_SUCCESS:
      return {...state, user: payload.user, isLoggedIn: true, isSign:true};

    case LOGOUT_USER_SUCCESS:
      return {...state, isLoggedIn: false, isSign:false};

    case UPDATE_USER_REQUEST:
      return {...state, loadingUpdate:true}
    case UPDATE_USER_SUCCESS:
      return {...state, loadingUpdate:false, user:{...state.user, ...payload.data}}
    case UPDATE_USER_FAILURE:
      return {...state, loadingUpdate:false}
    default:
      return state;
  }
};
export default auth;
