import axios from 'axios';
import deviceStorage from './deviceStorage';

export const url = 'https://kidsapi.herokuapp.com';
axiosApiInstance = axios.create({
  baseURL: url,
});
axiosApiInstance.interceptors.request.use(
  async config => {
    const access_token = await deviceStorage.getItem('access_token');
    console.log(access_token, 'token');
    config.headers = {
      Authorization: `Bearer ${access_token}`,
      Accept: 'application/json',
    };
    return config;
  },
  error => {
    Promise.reject(error);
  },
);
export default axiosApiInstance;
