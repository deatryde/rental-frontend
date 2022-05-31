import axios from 'axios';

const HTTP = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },

  validateStatus: (status) => {
    if (status === 401) {
      // add logout action
    }
    if (status === 403) {
      console.log('403 error');
    }
    return status >= 200 && status < 300;
  },
});
// HTTP.interceptors.request.use((config: any) => {
//   const urlName = new URLSearchParams(location.search).get('username');
//   config.headers.Authorization = urlName;
//   return config;
// });

export default HTTP;
