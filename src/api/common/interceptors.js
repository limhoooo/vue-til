import store from '@/store/index';

export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function (config) {
      console.log("request");
      config.headers.Authorization = store.state.token;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      console.log("response");
      return response;
    },
    function (error) {
      return Promise.reject(error);
    },
  );
  return instance;
}
