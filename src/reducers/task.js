import * as taskTypes from '../constants/task';

const initState = { list: [] };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case taskTypes.FETCH_TASK:
      return {
        ...state,
        list: [],
      };
    case taskTypes.FETCH_TASK_SUCCESS:
      return {
        ...state,
        list: action.payload.data,
      };
    case taskTypes.FETCH_TASK_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
