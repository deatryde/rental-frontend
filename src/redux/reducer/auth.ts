import AuthActions from '../actions/auth';
import { RequestStatus } from '../../constants/CommonConstants';

const initialState = {
  authToken: '',
  errMessage: '',
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case AuthActions.SET_AUTH(RequestStatus.SUCCESS):
      return { ...state, authToken: payload };
    case AuthActions.SET_AUTH(RequestStatus.ERROR):
      return { ...state, authToken: [] };
    case AuthActions.SIGNIN(RequestStatus.SUCCESS):
      return { ...state, authToken: payload.access_token };
    case AuthActions.SIGNIN(RequestStatus.ERROR):
      return { ...state, errMessage: payload };
    case AuthActions.SIGNUP(RequestStatus.SUCCESS):
      return { ...state, authToken: payload.access_token };
    case AuthActions.SIGNUP(RequestStatus.ERROR):
      return { ...state, errMessage: payload };
    case AuthActions.SIGNOUT(RequestStatus.SUCCESS):
      return { ...state, authToken: payload };
    case AuthActions.SIGNOUT(RequestStatus.ERROR):
      return { ...state, errMessage: payload };
    default:
      return state;
  }
}
