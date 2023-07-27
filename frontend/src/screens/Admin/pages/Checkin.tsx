import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { useQuery, QueryStatus } from '@tanstack/react-query';

import useSystem from '../../../hooks/useSystem';

import TicketAPI from '../../../api/clients/ticket/methods';
import type {
  GetTicket,
  UpdateTicketStatus,
} from '../../../api/clients/ticket/params';
import type { Ticket } from '../../../api/clients/ticket/response';
import type { APIErrorConfig } from '../../../api/types';

function useQueryTicket(params: GetTicket): {
  data: Ticket;
  status: QueryStatus;
} {
  const { data, status } = useQuery<Ticket, APIErrorConfig>(
    ['ticket', params],
    () => TicketAPI.getTicket(params),
    {
      enabled: !!params,
      retry: 1,
    },
  );

  return { data: data as Ticket, status };
}

function useQueryCheckin(params: UpdateTicketStatus): {
  data: Ticket;
  status: QueryStatus;
} {
  const { data, status } = useQuery<Ticket, APIErrorConfig>(
    ['ticket', params],
    () =>
      TicketAPI.updateTicketStatus({
        transactionId: params.transactionId,
        status: params.status,
      }),
    {
      enabled: !!params,
      retry: 1,
    },
  );

  return { data: data as Ticket, status };
}

const Checkin = () => {
  const [transactionId, setTransactionId] = useState<GetTicket>({
    transactionId: '',
  });
  const { data, status } = useQueryTicket(transactionId);
  const [scanned, setScanned] = useState(true);

  const { data: checkinData, status: checkinStatus } = useQueryCheckin({
    transactionId: transactionId.transactionId,
    status: 'success',
  });

  const handleScanResult = (result: string | null) => {
    if (result) {
      setTransactionId({ transactionId: result });
      setScanned(true);
    }
  };

  const handleRetry = () => {
    setTransactionId({ transactionId: '' });
    setScanned(false);
  };

  const handleCheckin = () => {};

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        color: 'black',
      }}
    >
      {!scanned ? (
        <div
          style={{
            width: '500px',
            height: '500px',
          }}
        >
          <QrReader
            constraints={{ facingMode: 'user' }}
            // onResult={(result) => handleScanResult(result?.text)}
          />
        </div>
      ) : (
        <div>
          <h2>Thông tin đơn hàng</h2>
          {status === 'loading' && <div>Chờ tí nha...</div>}
          {status === 'error' && <div>Đơn hàng không tồn tại</div>}
          {status === 'success' && (
            <div>
              <div>
                <p>Mã đơn hàng: {data.transactionId}</p>
                <p>Trạng thái: {data.status}</p>
              </div>
              <button type="button" onClick={handleCheckin}>
                Checkin
              </button>
            </div>
          )}
          <button type="button" onClick={handleRetry}>
            Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkin;
