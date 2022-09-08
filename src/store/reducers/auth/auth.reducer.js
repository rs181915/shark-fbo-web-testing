import * as actionConstants from 'store/constants/index';
import * as reducerFunctions from './function.reducer';

const initialState = {
  token: undefined,
  user: undefined,
  allUsers: [],
  getUserById: undefined,
  ip: '',
  geoip: {},
};

const authReducer = (
  state = initialState, action
) => {
  const reducerPayload = { state, action, initialState };
  switch (action.type) {
    case actionConstants.AUTH: return reducerFunctions.reducerAuth(reducerPayload);

    case actionConstants.AUTO_LOGIN: return reducerFunctions.reducerAutoLogin(reducerPayload);

    case actionConstants.GET_ALL_USERS: return reducerFunctions.reducerGetAllUsers(reducerPayload);

    case actionConstants.GET_USER_BY_ID: return reducerFunctions.reducerGetUserById(reducerPayload);

    case actionConstants.LOGOUT: return reducerFunctions.reducerLogout(reducerPayload);
    case actionConstants.GET_IP_ADDRESS: return reducerFunctions.reducerGetIpAddress(reducerPayload);

    default:
      return state;
  }
};
export default authReducer;
