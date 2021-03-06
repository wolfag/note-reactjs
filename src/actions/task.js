// import * as taskApis from '../apis/task';
import * as taskTypes from '../constants/task';

export const fetchListTask = () => {
  return {
    type: taskTypes.FETCH_TASK,
  };
};

export const fetchListTaskSuccess = (data) => {
  return {
    type: taskTypes.FETCH_TASK_SUCCESS,
    payload: { data },
  };
};

export const fetchListTaskFail = (error) => {
  return {
    type: taskTypes.FETCH_TASK_FAIL,
    payload: { error },
  };
};

// export const fetchListTaskRequest = () => {
//   return (dispatch) => {
//     dispatch(fetchListTask());
//     taskApis
//       .getList()
//       .then((data) => {
//         dispatch(fetchListTaskSuccess(data));
//       })
//       .catch((error) => {
//         dispatch(fetchListTaskFail(error));
//       });
//   };
// };

export const filterTask = (keyword) => ({
  type: taskTypes.FILTER_TASK,
  payload: { keyword },
});

export const filterTaskSuccess = (data) => ({
  type: taskTypes.FILTER_TASK_SUCCESS,
  payload: { data },
});

export const filterTaskFail = (error) => ({
  type: taskTypes.FILTER_TASK_FAIL,
  payload: { error },
});
