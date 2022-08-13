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
        Authorization: `Bearer ${await getAccessToken()}`,
      },
    },
  };
  return config;
};

const getAccessToken = async () => {
  const audience: any = process.env.REACT_APP_AUTH0_AUDIENCE?.toString();
  // if (auth0Security.getAccessTokenSilently !== null)
  //   return auth0Security.getAccessTokenSilently()({
  //     audience: audience
  //   });
  return "";
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
