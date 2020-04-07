import * as uiTypes from '../constants/ui';

const initState = {
  loading: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case uiTypes.SET_LOADING:
      return { ...state, loading: action.payload.status };
    default:
      return state;
  }
};

export default reducer;
