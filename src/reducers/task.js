import { get } from 'lodash';
import * as taskTypes from '../constants/task';
import { toastError, toastSuccess } from '../helpers/toast';

const initState = { list: [] };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case taskTypes.FETCH_TASK:
      return {
        ...state,
        list: [],
      };
    case taskTypes.FETCH_TASK_SUCCESS:
      toastSuccess('sucess');
      return {
        ...state,
        list: action.payload.data,
      };
    case taskTypes.FETCH_TASK_FAIL:
      toastError(get(action, 'payload.error'));
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
