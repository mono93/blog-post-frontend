import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

const isAPIDown = (err: AxiosError) => {
  return !!err.isAxiosError && !err.response;
}


const onRequest = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  // change the base url and append the additional headers coming with request
  config = {
    ...config,
    baseURL: process.env.REACT_APP_API_URL as string,
    headers: {
      ...config.headers,
      ...{
        Authorization: `Bearer ${getAccessToken()}`,
      },
    },
  };
  return config;
};

const getAccessToken = () => {
  return JSON.parse(localStorage.getItem('the-blog-post-auth-data') as string)?.idToken || "";
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {

  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse) => {
  return response;
};

const onResponseError = (error: AxiosError): Promise<any> => {
  if (isAPIDown(error)) {
    return Promise.reject({ code: 503, message: "Service Unavailable" });
  } else if (error.code == '403') {
    return Promise.reject({ code: error.code, message: "Access Denied" });
  }
  return Promise.reject({ code: error.code, message: error.message });
};

export function setupInterceptorsTo(
  axiosInstance: AxiosInstance
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
