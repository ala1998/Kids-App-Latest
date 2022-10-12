import {
  IS_LOGGED_REQUEST,
  IS_LOGGED_FAILURE,
  IS_LOGGED_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SHOW_MODAL,
  CLOSE_MODAL,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from '../types';
import {actions} from 'react-native-redux-alert';
import * as API from '../../../services/api.js';
import deviceStorage from '../../../services/deviceStorage';
import firebase from '@react-native-firebase/app';

export const isSignedIn = () => async dispatch => {
  dispatch({
    type: IS_LOGGED_REQUEST,
  });
  try {
    const token = await deviceStorage.getItem('access_token');
    if (token) {
      const user = await API.getUserData();

      dispatch({
        type: IS_LOGGED_SUCCESS,
        payload: {
          user: user.data.data,
        },
      });
    } else {
      dispatch({
        type: IS_LOGGED_FAILURE,
      });
    }
  } catch (error) {
    dispatch({
      type: IS_LOGGED_FAILURE,
    });
    throw error;
  }
};
export const loginUser = (username, password) => async dispatch => {
  dispatch({
    type: LOGIN_USER_REQUEST,
  });
  dispatch({type: SHOW_MODAL});
  try {
    const defaultAppMessaging = firebase.messaging();
    let device_token = await defaultAppMessaging.getToken();
    // const response = await API.login(username, password, device_token);
    // if (!response?.data?.status) {
    //   dispatch(actions.showError(response?.data?.msg, 2500));
    // } else {
      // const access_token = response.data.data.api_token;
      // await deviceStorage.saveItem('access_token', access_token);
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {
          user: 'user',
        },
      });
    // }

    dispatch({type: CLOSE_MODAL});
  } catch (err) {
    console.log(err, 'err');
    dispatch({type: CLOSE_MODAL});
    dispatch(actions.showError('Network Error', 2000));
    dispatch({
      type: LOGIN_USER_FAILURE,
      payload: {
        errorMsg: err,
      },
    });
  }
};
export const signupUser = data => async dispatch => {
  dispatch({
    type: SIGNUP_USER_REQUEST,
  });
  dispatch({type: SHOW_MODAL});
  try {
    const response = await API.signup(data);
    if (!response?.data?.status) {
      dispatch(actions.showError(response?.data?.msg, 2500));
    } else {
      const access_token = response.data.data.api_token;
      await deviceStorage.saveItem('access_token', access_token);
      dispatch({
        type: SIGNUP_USER_SUCCESS,
        payload: {
          user: response.data.data,
        },
      });
    }

    dispatch({type: CLOSE_MODAL});
  } catch (err) {
    console.log(err, 'err');
    dispatch({type: CLOSE_MODAL});
    dispatch(actions.showError('Network Error', 2000));
    dispatch({
      type: SIGNUP_USER_FAILURE,
      payload: {
        errorMsg: err,
      },
    });
  }
};
export const updateUser = data => async dispatch => {
  dispatch({
    type: UPDATE_USER_REQUEST,
  });
  try {
    console.log(data, 'data');
    const response = await API.updateUser(data);
    if (!response?.data?.status) {
      dispatch({
        type: UPDATE_USER_FAILURE,
      });
      console.log('error', !response?.data?.status);
      dispatch(actions.showError(response?.data?.msg, 2500));
    } else {
      console.log(response.data.data, 'response.data.data');
      dispatch(actions.showSuccess('تم تحديث البيانات بنجاح', 2500));
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: {
          data,
        },
      });
    }
  } catch (err) {
    console.log(err, 'err');
    dispatch(actions.showError('حصل خطأ الرجاء المحاولة في وقت لاحق', 2000));
    dispatch({
      type: UPDATE_USER_FAILURE,
      payload: {
        errorMsg: err,
      },
    });
  }
};
export const logout = () => async dispatch => {
  dispatch({
    type: LOGOUT_USER_REQUEST,
  });
  dispatch({type: SHOW_MODAL});
  try {
    const response = await API.logout();
    console.log(response?.data);
    if (response?.data?.success) {
      deviceStorage.removeItem('access_token');
      dispatch({
        type: LOGOUT_USER_SUCCESS,
      });
      dispatch({type: CLOSE_MODAL});
    } else {
      dispatch(actions.showError(response?.data?.message, 2000));
    }
  } catch (err) {
    console.log(err, 'err');
    dispatch({type: CLOSE_MODAL});
    dispatch(actions.showError('Network Error', 2000));
    dispatch({
      type: LOGOUT_USER_FAILURE,
      payload: {
        errorMsg: err,
      },
    });
  }
};
