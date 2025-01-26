import { AxiosRequestConfig, AxiosInstance } from 'axios';
declare class HTTPClient {
    static create(config: AxiosRequestConfig): AxiosInstance;
}
export default HTTPClient;
