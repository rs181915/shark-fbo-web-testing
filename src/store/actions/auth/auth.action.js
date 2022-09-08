import * as api from 'apis/request';
import { handleCatch, handleTry } from 'store/helper/index';
import * as actionConstants from 'store/constants/index';

export const signUp = (formData, setSnackbar, cb) => async (dispatch) => {
  try {
    const response = await api.requestSignUp(formData);
    const { user, tokens, message, code } = response;
    handleTry({
      dispatch,
      dispatchType: actionConstants.AUTH,
      dispatchPayload: { user, token: tokens?.access?.token },
      setSnackbar,
      message,
      cb,
      cbData: { uniqueId: user?._id },
      code
    });
  } catch (response) {
    handleCatch({ response, setSnackbar, cb, dispatch, dispatchType: actionConstants.AUTH_ERROR });
  }
};

export const signIn = (formData, setSnackbar, cb) => async (dispatch) => {
  try {
    const response = await api.requestSignIn(formData);
    const { message, user, tokens, code } = response;
    handleTry({
      dispatch,
      dispatchType: actionConstants.AUTH,
      dispatchPayload: { user, token: tokens?.access?.token },
      setSnackbar,
      message,
      cb,
      code
    });
  } catch (response) {
    handleCatch({ response, setSnackbar, cb, dispatch, dispatchType: actionConstants.AUTH_ERROR });
  }
};

export const signOut = (formData, setSnackbar, cb, history) => async (dispatch) => {
  const response = await api.rew(formData);
  try {
    handleTry({
      dispatch,
      dispatchType: actionConstants.LOGOUT,
      dispatchPayload: { history },
      setSnackbar,
      message: 'Successfully Logged Out',
      cb,
      cbData: true
    });
  } catch ({ response }) {
    handleCatch({ response, setSnackbar, cb, dispatch, dispatchType: actionConstants.AUTH_ERROR });
  }
};
