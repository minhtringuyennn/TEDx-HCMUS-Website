import apiClient from '.';
import * as Response from './response';
import * as Params from './params';
import * as Transform from './transform';
import { HTTPMethod } from '../../types';

const route = '/ticket';

export default {
  getTicket: (params: Params.GetTicket) =>
    apiClient<Response.Ticket>({
      url: `${route}/${params.transactionId}`,
      method: HTTPMethod.GET,
    }).then(Transform.ticketResponse),

  updateTicketStatus: (params: Params.UpdateTicketStatus) =>
    apiClient<Response.Ticket>({
      url: `${route}/${params.transactionId}`,
      method: HTTPMethod.PATCH,
      data: { status: params.status },
    }).then(Transform.ticketResponse),
};
