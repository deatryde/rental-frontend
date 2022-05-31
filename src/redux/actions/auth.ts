import { RequestStatus } from '../../constants/CommonConstants';

const SIGNIN = (status: string) => `@rental/SIGNIN_${status}`;
const SIGNUP = (status: string) => `@rental/SIGNUP_${status}`;
const SIGNOUT = (status: string) => `@rental/SIGNOUT_${status}`;
const SET_AUTH = (status: string) => `@workflows/SET_AUTH_${status}`;

const setAuthError = (err: any) => {
  return {
    type: SET_AUTH(RequestStatus.ERROR),
    payload: err,
  };
};

const setAuthSuccess = (payload: any) => {
  return {
    type: SET_AUTH(RequestStatus.SUCCESS),
    payload,
  };
};

const signin = (payload: any, navigate: any) => {
  return {
    type: SIGNIN(RequestStatus.REQUEST),
    payload,
    navigate,
  };
};

const signinError = (err: any) => {
  return {
    type: SIGNIN(RequestStatus.ERROR),
    payload: err,
  };
};

const signinSuccess = (payload: any) => {
  return {
    type: SIGNIN(RequestStatus.SUCCESS),
    payload,
  };
};

const signup = (payload: any, navigate: any) => {
  return {
    type: SIGNUP(RequestStatus.REQUEST),
    payload,
    navigate,
  };
};

const signupError = (err: any) => {
  return {
    type: SIGNUP(RequestStatus.ERROR),
    payload: err,
  };
};

const signupSuccess = (payload: any) => {
  return {
    type: SIGNUP(RequestStatus.SUCCESS),
    payload,
  };
};

const signout = (navigate: any) => {
  return {
    type: SIGNOUT(RequestStatus.REQUEST),
    navigate,
  };
};

const signoutError = (err: any) => {
  return {
    type: SIGNOUT(RequestStatus.ERROR),
    payload: err,
  };
};

const signoutSuccess = (payload: any) => {
  return {
    type: SIGNOUT(RequestStatus.SUCCESS),
    payload,
  };
};

export default {
  setAuthError,
  setAuthSuccess,
  SET_AUTH,
  signin,
  signinError,
  signinSuccess,
  SIGNIN,
  signup,
  signupError,
  signupSuccess,
  SIGNUP,
  signout,
  signoutError,
  signoutSuccess,
  SIGNOUT,
};
