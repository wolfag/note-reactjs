import Axios from '../common/axios';
import { API_ENDPOINT } from '../constants';

const url = 'tasks';

export const getList = () => {
  return Axios.get(`${API_ENDPOINT}/${url}`);
};
