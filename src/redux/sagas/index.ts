import authSaga from './authSaga';
import { all, fork } from 'redux-saga/effects';

const sagas = [authSaga];

export default function* rootSaga(services = {}) {
  yield all(sagas.map((saga) => fork(saga, services)));
}
