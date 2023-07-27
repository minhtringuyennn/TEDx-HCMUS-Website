import type { AxiosRequestConfig } from 'axios';

export enum HTTPMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete',
  OPTIONS = 'options',
  HEAD = 'head',
}

export enum StatusCode {
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503,
}

export type APIErrorConfig = {
  originalRequest: AxiosRequestConfig<any>;
  status: StatusCode;
  message: string;
};

export class APIError extends Error {
  originalRequest: AxiosRequestConfig<any>;

  status: StatusCode;

  constructor(config: APIErrorConfig) {
    super();
    this.originalRequest = config.originalRequest;
    this.status = config.status;
    this.message = config.message;
  }
}
