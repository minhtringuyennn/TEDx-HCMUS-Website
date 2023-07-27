import type { AxiosRequestConfig } from 'axios';
import qs from 'qs';

export function paramsSerializer(params: AxiosRequestConfig['params']) {
  return qs.stringify(params, { arrayFormat: 'repeat' });
}

const apiUtils = { paramsSerializer };
export default apiUtils;
