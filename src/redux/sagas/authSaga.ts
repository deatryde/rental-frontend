import { call, fork, put, takeEvery } from 'redux-saga/effects';
import AuthActions from '../actions/auth';
import { RequestStatus } from '../../constants/CommonConstants';
import { signinUser, signupUser } from '../../services/auth';

export const getAuth = (state) => state.auth.authToken;

function* watchAuthentication() {
  yield takeEvery(AuthActions.SET_AUTH(RequestStatus.REQUEST), setAuth);

  yield takeEvery(AuthActions.SIGNIN(RequestStatus.REQUEST), login);

  yield takeEvery(AuthActions.SIGNUP(RequestStatus.REQUEST), signup);

  yield takeEvery(AuthActions.SIGNOUT(RequestStatus.REQUEST), signout);
}

function* setAuth({ payload }) {
  try {
    yield put(AuthActions.setAuthSuccess(payload));
  } catch (error) {
    yield put(AuthActions.setAuthError(error));
  }
}

function* login({ payload, navigate }) {
  try {
    const { data } = yield call(signinUser, payload);
    yield put(AuthActions.signinSuccess(data));
    localStorage.setItem('access-token', data.access_token);
    navigate(`/home`);
  } catch (error) {
    yield put(AuthActions.signinError(error));
    navigate(`../signin`);
  }
}

function* signup({ payload, navigate }) {
  try {
    const { data } = yield call(signupUser, payload);
    yield put(AuthActions.signupSuccess(data));
    localStorage.setItem('access-token', data.access_token);
    navigate(`/home`);
  } catch (error) {
    yield put(AuthActions.signupError(error));
    navigate(`/signup`);
  }
}

function* signout({ navigate }) {
  try {
    yield put(AuthActions.signoutSuccess(''));
    localStorage.removeItem('access-token');
    navigate('/signout');
  } catch (error) {
    yield put(AuthActions.signoutError(error));
  }
}

export default function* authSagas() {
  yield fork(watchAuthentication);
}
