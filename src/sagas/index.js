import { take, fork, call, put, delay, takeLatest } from 'redux-saga/effects';
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

function* filterTask(action) {
  try {
    yield delay(500);
    const response = yield call(taskApis.filter, action.payload.keyword);
    yield put(taskActions.filterTaskSuccess(response));
  } catch (error) {
    yield put(taskActions.filterTaskFail(error));
  }
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTask);
}

export default rootSaga;
