import axios from 'axios';

class Axios {
  constructor() {
    const instance = axios.create();

    instance.interceptors.response.use(this.handleSuccess, this.handleSuccess);

    this.instance = instance;
  }

  handleSuccess(response) {
    return response.data;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(url);
  }
}

export default new Axios();
