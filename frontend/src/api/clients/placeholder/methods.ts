import apiClient from 'api/clients/placeholder';
import * as Response from 'api/clients/placeholder/response';
import * as Params from 'api/clients/placeholder/params';
import * as Transform from 'api/clients/placeholder/transform';
import { HTTPMethod } from 'api/types';

export const TicketAPI = {
  getTicket: (params: Params.GetTicket) =>
    apiClient<Response.Ticket>({
      url: `/ticket/${params.transactionId}`,
      method: HTTPMethod.GET,
    }).then(Transform.ticketResponse),
};

export const UserAPI = {};
