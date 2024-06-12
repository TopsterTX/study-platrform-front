import axios from "axios";

export type CommonParams = {
  url: string;
  headers?: Record<string, string>;
  options?: Record<string, string>;
};

export type GetFromAPI = CommonParams;
export type DeleteFromAPI = CommonParams;
export type PostToAPI<T> = CommonParams & {
  data: T;
};
export type PutToAPI<T> = PostToAPI<T>;

export const API = axios.create();

export const getFromAPI = ({ url, headers = {}, options = {} }: GetFromAPI) => {
  const urlOptions = new URLSearchParams(options);
  return API.get(`${url}${urlOptions.toString()}`, { headers });
};

export const postToAPI = <T extends Record<string, unknown>>({
  url,
  data,
  headers = {},
  options = {},
}: PostToAPI<T>) => {
  const urlOptions = new URLSearchParams(options);
  return API.post(`${url}${urlOptions.toString()}`, { headers, data });
};

export const putToAPI = <T extends Record<string, unknown>>({
  url,
  data,
  headers = {},
  options = {},
}: PutToAPI<T>) => {
  const urlOptions = new URLSearchParams(options);
  return API.put(`${url}${urlOptions.toString()}`, { headers, data });
};

export const deleteFromAPI = <T extends Record<string, unknown>>({
  url,
  headers = {},
  options = {},
}: DeleteFromAPI) => {
  const urlOptions = new URLSearchParams(options);
  return API.delete(`${url}${urlOptions.toString()}`, { headers });
};
