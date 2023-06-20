import type { AxiosError } from 'axios';
import { APIError, StatusCode } from 'api/types';

const errors: Record<StatusCode, string> = {
  [StatusCode.SERVICE_UNAVAILABLE]:
    'This service is unavailable right now, please try again later',
  [StatusCode.INTERNAL_SERVER_ERROR]:
    'An unexpected error occurred, please try again later',
  [StatusCode.NOT_FOUND]:
    'The requested content does not exist, please try something else',
  [StatusCode.FORBIDDEN]: 'You are not allowed to access this content',
  [StatusCode.UNAUTHORIZED]: 'You should login in order to access this content',
};

export function handleErrorResponse(
  err: AxiosError<Record<'message', string | undefined>>,
) {
  const originalRequest = err.config ?? {};
  const status: StatusCode =
    err.response?.status || StatusCode.INTERNAL_SERVER_ERROR;
  if (!err.response) {
    const error = new APIError({
      originalRequest,
      status,
      message: errors[StatusCode.SERVICE_UNAVAILABLE],
    });
    throw error;
  }
  if (status in errors) {
    const error = new APIError({
      originalRequest,
      status,
      message: errors[status],
    });

    throw error;
  }

  const message =
    err?.response?.data?.message ??
    (err.message || errors[StatusCode.INTERNAL_SERVER_ERROR]);

  const error = new APIError({ originalRequest, message, status });
  throw error;
}

export default errors;
