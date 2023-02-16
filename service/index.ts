import axios from "axios";
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";
class Request {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }
  // 公共的请求的方法
  request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return new Promise((resolve, reject) => {
      // 开始发起网络请求
      this.instance
        .request<T>(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  get<T = any>(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "get" });
  }
  post<T = any>(config: AxiosRequestConfig<T>) {
    return this.request({ ...config, method: "post" });
  }
  delete<T = any>(config: AxiosRequestConfig<T>) {
    return this.request({ ...config, method: "delete" });
  }
  put<T = any>(config: AxiosRequestConfig<T>) {
    return this.request({ ...config, method: "put" });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Request({
  baseURL:
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_BASEURL_DEV
      : process.env.NEXT_PUBLIC_BASEURL_PROD,
  timeout: 10000,
});
