import { useStepper } from 'hooks';
import Button from 'components/Button';
import styled from 'styled-components';
import InputField from 'components/InputField/InputField';

function numberWithCommas(x: number) {
  let s = x.toString();
  const pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(s)) s = s.replace(pattern, '$1.$2');
  return s;
}

const CustomerInfo = () => (
  <InfoSection>
    <h3>Thông tin người đặt</h3>
    <div className="input-row">
      <InputField label="Họ và tên" className="input" />
    </div>
    <div className="input-row">
      <InputField label="Email" className="input" />
      <InputField label="Số điện thoại" className="input" />
    </div>
  </InfoSection>
);

const BookingInfo = () => {
  const booking = [
    {
      title: 'Ghế hạng A',
      single: 300000,
      number: 1,
    },
    {
      title: 'Combo ghế đôi hạng A',
      single: 560000,
      number: 1,
    },
  ];
  let total = 0;
  return (
    <InfoSection>
      <h3>Đơn hàng của bạn</h3>
      {booking.map((item) => {
        total += item.single * item.number;
        return (
          <div className="booking-des">
            <div className="booking-item">
              <div>{item.number}</div>
              <div className="booking-item-title">
                <div>{item.title}</div>
                <div className="booking-item-price">{`Đơn giá: ${numberWithCommas(
                  item.single,
                )}`}</div>
              </div>
            </div>
            <div>{numberWithCommas(item.single * item.number)}</div>
          </div>
        );
      })}
      <div className="ticket-group-divider" />
      <div className="booking-des">
        <div>Tổng đơn hàng (VNĐ)</div>
        <div>{numberWithCommas(total)}</div>
      </div>
    </InfoSection>
  );
};

const StepInfo = () => {
  const { increment, decrement } = useStepper();

  return (
    <StepBody>
      <div className="grid-item">
        <CustomerInfo />
        <BookingInfo />
        <ButtonGroup>
          <Button type="text" onClick={decrement}>
            Trở về
          </Button>
          <Button onClick={increment}>Tiếp theo</Button>
        </ButtonGroup>
      </div>
    </StepBody>
  );
};

export default StepInfo;

const StepBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 50% 1fr;
  text-align: center;
  .grid-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    grid-column: 2/3;
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  margin-top: 20px;
  button {
    width: 50%;
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    margin-top: 8px;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  .input {
    margin-top: 8px;
    width: 100%;
  }
  .input-row {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      flex-direction: column;
      gap: 12px;
    }
  }
  .booking-des {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }
  .booking-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }
  .booking-item-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .booking-item-price {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.lightGray};
  }

  .ticket-group-divider {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.darkGray};
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    gap: 8px;
    .input {
      margin-top: 4px;
    }
  }
`;
