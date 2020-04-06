import { toast } from 'react-toastify';
import { get } from 'lodash';

export const toastError = (error) => {
  const message = get(error, 'message');
  if (message) {
    toast.error(message);
  }
};

export const toastSuccess = (success) => {
  const message = success;
  if (message) {
    toast.success(message);
  }
};
