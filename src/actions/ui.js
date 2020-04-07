import * as uiTypes from '../constants/ui';

export const setLoading = (status) => ({
  type: uiTypes.SET_LOADING,
  payload: { status },
});
