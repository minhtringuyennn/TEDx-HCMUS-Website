export type GetTicket = {
  transactionId: string;
};

export type UpdateTicketStatus = {
  transactionId: string;
  status: TicketStatus;
};

type TicketStatus = 'pending' | 'success' | 'failed';
