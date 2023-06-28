/* eslint-disable no-unused-vars */
import { Config } from "../constants/Config"
import axios from "axios";

export const gatewayInstance = axios.create({
  baseURL: Config?.API_URL,
});

export const setRequestHeaderToken = (accessToken) => {
  gatewayInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;
};

export const setXRequestScope = (scope) => {
  gatewayInstance.defaults.headers['X-RequestScope'] = scope;
}

export const UseGetApi = async ({ url, params, headers, signal }) =>
  gatewayInstance.get(url, {
    headers: headers || {},
    params: params || {},
    signal,
  });

export const UsePostApi = async ({ url, data, headers, params, onUploadProgress, responseType }) =>
  gatewayInstance({
    method: "post",
    url,
    headers,
    data,
    params,
    onUploadProgress,
    responseType,
  });

export const UseDeleteApi = async ({ url, data, headers, params, onUploadProgress }) =>
  gatewayInstance({
    method: "delete",
    url,
    headers,
    data,
    params,
    onUploadProgress,
  });
