export const CHECK_CONNECTION = 'Check your connection';
export const handleCatch = ({ response, setSnackbar, dispatch, cb, dispatchType }) => {
  if (response?.data) {
    const { data: { message } } = response;
    setSnackbar && setSnackbar({ isVisible: true, type: 'error', message });
    (dispatch && dispatchType) && dispatch({ type: dispatchType, payload: message });
    cb && cb({ status: false, message });
  } else {
    setSnackbar && setSnackbar({ isVisible: true, type: 'error', message: CHECK_CONNECTION });
    (dispatch && dispatchType) && dispatch({ type: dispatchType, payload: CHECK_CONNECTION });
    cb && cb({ status: false });
  }
};

export const handleTry = ({ dispatch, dispatchType, dispatchPayload, setSnackbar, message, cb, cbData, code }) => {
  const isSuccess = (code < 300 && code >= 200) || (code === undefined && true);
  if (isSuccess) {
    setSnackbar && message && setSnackbar({ isVisible: true, type: 'success', message });
    (dispatch && dispatchPayload) && dispatch({ type: dispatchType, payload: dispatchPayload });
    cb && cb({ status: true, ...cbData && cbData });
  } else {
    setSnackbar && message && setSnackbar({ isVisible: true, type: 'error', message });
    cb && cb({ status: false, ...cbData && cbData });
  }
};
