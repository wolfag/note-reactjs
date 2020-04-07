import { take, fork, call, put, delay } from 'redux-saga/effects';
import * as taskTypes from '../constants';
import * as taskApis from '../apis/task';
import * as taskActions from '../actions/task';
import * as uiActions from '../actions/ui';

function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    try {
      yield put(uiActions.setLoading(true));
      const response = yield call(taskApis.getList);
      yield put(taskActions.fetchListTaskSuccess(response));
    } catch (error) {
      yield put(taskActions.fetchListTaskFail(error));
    } finally {
      yield delay(1000);
      yield put(uiActions.setLoading(false));
    }
  }
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
}

export default rootSaga;
