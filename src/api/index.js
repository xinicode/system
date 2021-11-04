import axios from 'axios';
import { getToken } from '@/utils/setToken';
import { Message } from 'element-ui';


// axios.defaults.baseURL = `http://139.196.42.209`;

axios.interceptors.request.use(config => {
  config.headers['Authorization'] = 'Bearer bG9jYWw6NjUwYmRkN2EtNWU1MS00MjExLTkwZDctMGU3YmNmZTM1MjYy';
  return config;
})

axios.interceptors.response.use(response => {
  let { status, statusText } = response; 
  if (status != 200 ) {
    Message({
      type: 'warning',
      message: statusText || 'error',
      duration: 2000,
      showClose: true,
    })
  }
  return response.data;
}), err => {
  return Promise.reject(err)
}

export default axios;