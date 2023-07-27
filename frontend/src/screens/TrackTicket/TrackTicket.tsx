import { useState } from 'react';
import styled from 'styled-components';
import InputField from 'components/InputField';
import { Form, Space } from 'antd';
import { useQuery, QueryStatus } from '@tanstack/react-query';

import Navbar from '../../components/NavBar/NavBar';

import TicketAPI from '../../api/clients/ticket/methods';
import type { GetTicket } from '../../api/clients/ticket/params';
import type { Ticket } from '../../api/clients/ticket/response';
import type { APIErrorConfig } from '../../api/types';

function useQueryTicket(transactionId: GetTicket): {
  data: Ticket;
  status: QueryStatus;
} {
  const { data, status } = useQuery<Ticket, APIErrorConfig>(
    ['ticket', transactionId],
    () => TicketAPI.getTicket(transactionId),
    {
      enabled: !!transactionId,
      retry: 1,
    },
  );

  return { data: data as Ticket, status };
}

const TrackTicket = () => {
  const [transactionId, setTransactionId] = useState<GetTicket>({
    transactionId: '',
  });
  const { data, status } = useQueryTicket(transactionId);

  return (
    <Styled>
      <section>
        <div className="track-title">
          <h2>Theo dõi đơn hàng</h2>
          <div className="track-id">
            <Form
              className="form-width"
              onFinish={(values) => {
                setTransactionId({ transactionId: values['booking-id'] });
              }}
            >
              <Form.Item className="form-width" name="booking-id">
                <Space.Compact className="form-width">
                  <InputField placeholder="Nhập mã đơn hàng" />
                </Space.Compact>
              </Form.Item>
            </Form>
          </div>

          {status === 'loading' && <div>Chờ tí nha...</div>}
          {status === 'error' && <div>Đơn hàng không tồn tại</div>}
          {status === 'success' && (
            <div>
              <h2>Thông tin đơn hàng</h2>
              <div>
                <p>Mã đơn hàng: {data.transactionId}</p>
                <p>Trạng thái: {data.status}</p>
                <p>QR Code:</p>
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data.transactionId}`}
                  alt="QR Code"
                  style={{
                    width: '500px',
                    height: '500px',
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </section>
      <Navbar />
    </Styled>
  );
};

export default TrackTicket;

const Styled = styled.div`
  section {
    height: 100vh;
    padding: 5rem;
  }
  .form-width {
    width: 100%;
  }
  .track-title {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }
  .track-id {
    display: flex;
    align-items: center;
    gap: 40px;
    width: 50%;
  }
  @media (max-width: ${({ theme }) => theme.size.md}) {
    .track-id {
      width: 80%;
    }
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    section {
      padding: 3rem 1rem;
    }
    .track-id {
      gap: 16px;
      width: 100%;
    }
    .track-title {
      gap: 20px;
    }
  }
`;
