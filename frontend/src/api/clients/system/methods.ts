import apiClient from '.';
import * as Response from './response';
import * as Params from './params';
import * as Transform from './transform';
import { HTTPMethod } from '../../types';

const route = '/system';

export default {
  getSystem: (params: Params.GetSystem) =>
    apiClient<Response.System>({
      url: `${route}/info`,
      headers: { 'x-api-key': params.APIKEY },
      method: HTTPMethod.GET,
    }).then(Transform.systemResponse),
};
