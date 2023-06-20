import { describe, expect, it } from 'vitest';
import errors, { handleErrorResponse } from 'api/errors';
import { StatusCode } from 'api/types';
import { AxiosResponse, AxiosHeaders } from 'axios';

const mockFields = {
  isAxiosError: false,
  toJSON: vi.fn(),
  name: '',
  config: {
    headers: new AxiosHeaders(),
  },
};

const mockResponseFields: Pick<
  AxiosResponse,
  'headers' | 'config' | 'statusText'
> = {
  headers: new AxiosHeaders(),
  statusText: '',
  config: {
    headers: new AxiosHeaders(),
  },
};

describe('API client configuration', () => {
  it('Returns the correct message in case of 500 status code', () => {
    try {
      handleErrorResponse({
        ...mockFields,
        message: "Shouldn't display this",
        response: {
          status: StatusCode.INTERNAL_SERVER_ERROR,
          data: { message: "Shouldn't display this" },
          ...mockResponseFields,
        },
      });
    } catch (error) {
      expect((error as Error).message).toBe(
        errors[StatusCode.INTERNAL_SERVER_ERROR],
      );
      expect((error as Error).message).not.toBe("Shouldn't display this");
    }
  });
  it('Returns the correct message in case of 503 error', () => {
    try {
      handleErrorResponse({
        ...mockFields,
        message: "Shouldn't display this",
        response: {
          status: StatusCode.SERVICE_UNAVAILABLE,
          data: { message: "Shouldn't display this" },
          ...mockResponseFields,
        },
      });
    } catch (error) {
      expect((error as Error).message).toBe(
        errors[StatusCode.SERVICE_UNAVAILABLE],
      );
      expect((error as Error).message).not.toBe("Shouldn't display this");
    }
  });
  it('Returns the correct message in case of 404 error', () => {
    try {
      handleErrorResponse({
        ...mockFields,
        message: "Shouldn't display this",
        response: {
          status: StatusCode.NOT_FOUND,
          data: { message: "Shouldn't display this" },
          ...mockResponseFields,
        },
      });
    } catch (error) {
      expect((error as Error).message).toBe(errors[StatusCode.NOT_FOUND]);
      expect((error as Error).message).not.toBe("Shouldn't display this");
    }
  });
  it('Returns the correct message in case of 403 error', () => {
    try {
      handleErrorResponse({
        ...mockFields,
        message: "Shouldn't display this",
        response: {
          status: StatusCode.FORBIDDEN,
          data: { message: "Shouldn't display this" },
          ...mockResponseFields,
        },
      });
    } catch (error) {
      expect((error as Error).message).toBe(errors[StatusCode.FORBIDDEN]);
      expect((error as Error).message).not.toBe("Shouldn't display this");
    }
  });
  it('Returns the error response message in case of 401 error', () => {
    try {
      handleErrorResponse({
        ...mockFields,
        message: 'Root message',
        response: {
          status: StatusCode.UNAUTHORIZED,
          data: { message: "Shouldn't display this" },
          ...mockResponseFields,
        },
      });
    } catch (error) {
      expect((error as Error).message).toBe(errors[StatusCode.UNAUTHORIZED]);
      expect((error as Error).message).not.toBe("Shouldn't display this");
    }
  });
  it('Returns the response error message in case it exists and there is a bad request', () => {
    try {
      handleErrorResponse({
        ...mockFields,
        message: "Shouldn't display this",
        response: {
          status: 400,
          data: { message: 'Some response error message' },
          ...mockResponseFields,
        },
      });
    } catch (error) {
      expect((error as Error).message).toBe('Some response error message');
      expect((error as Error).message).not.toBe("Shouldn't display this");
    }
  });
  it('Fallback to the root error message in case of bad request without message field', () => {
    try {
      handleErrorResponse({
        ...mockFields,
        message: 'Error failed with status code 400',
        response: {
          status: 400,
          data: { message: undefined },
          ...mockResponseFields,
        },
      });
    } catch (error) {
      expect((error as Error).message).toBe(
        'Error failed with status code 400',
      );
      expect((error as Error).message).not.toBe(undefined);
    }
  });
  it('Show service unavailable message in case of no response at all', () => {
    try {
      handleErrorResponse({
        ...mockFields,
        message: '',
        response: undefined,
      });
    } catch (error) {
      expect((error as Error).message).toBe(
        errors[StatusCode.SERVICE_UNAVAILABLE],
      );
      expect((error as Error).message).not.toBe(
        errors[StatusCode.INTERNAL_SERVER_ERROR],
      );
    }
  });
});
