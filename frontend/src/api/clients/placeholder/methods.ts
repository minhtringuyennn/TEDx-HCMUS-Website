import apiClient from 'api/clients/placeholder';
import * as Response from 'api/clients/placeholder/response';
import * as Params from 'api/clients/placeholder/params';
import * as Transform from 'api/clients/placeholder/transform';
import { HTTPMethod } from 'api/types';

// Declare your API calls here...
const PostsAPI = {
  getPosts: (params?: Params.GetPosts) =>
    apiClient<Response.Post[]>({
      url: '/posts',
      method: HTTPMethod.GET,
      params,
    }).then(Transform.postResponse),
};

export default PostsAPI;
