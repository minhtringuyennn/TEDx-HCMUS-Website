import React from 'react';
import { useQuery, QueryStatus } from '@tanstack/react-query';

import useSystem from '../../../hooks/useSystem';

import SystemAPI from '../../../api/clients/system/methods';
import type { GetSystem } from '../../../api/clients/system/params';
import type { System } from '../../../api/clients/system/response';
import type { APIErrorConfig } from '../../../api/types';

function useQueryTicket(apiKey: GetSystem): {
  data: System;
  status: QueryStatus;
} {
  const { data, status } = useQuery<System, APIErrorConfig>(
    ['system', apiKey],
    () => SystemAPI.getSystem(apiKey),
    {
      enabled: !!apiKey,
      retry: 1,
    },
  );

  return { data: data as System, status };
}

const Overview: React.FC = () => {
  const System = useSystem();
  const { apiKey } = System;
  const { data: fetchData, status } = useQueryTicket({
    APIKEY: apiKey as string,
  });

  const data = fetchData?.data;

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
      {status === 'loading' && <div>Chờ tí nha...</div>}
      {status === 'error' && <div>Bạn không có quyền truy cập</div>}
      {status === 'success' && (
        <div>
          <h2>Thông tin hệ thống</h2>

          <p>Thời gian tạo: {data?.createdAt}</p>
          <p>Thời gian cập nhật: {data?.updatedAt}</p>
          <p>Số ghế trống hiện tại: {data?.availableSeats?.length}</p>
          <p>Số ghế đã đặt hiện tại: {data?.bookedSeats?.length}</p>
          <p>Số ghế chưa xác nhận hiện tại: {data?.reservedSeats?.length}</p>
        </div>
      )}
    </div>
  );
};

export default Overview;
