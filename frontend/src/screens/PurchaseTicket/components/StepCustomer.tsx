import { useState, useMemo } from 'react';
import { useStepper } from 'hooks';
import Button from 'components/Button';
import styled from 'styled-components';
import InputField from 'components/InputField/InputField';
import { Form, ConfigProvider } from 'antd';
import _ from 'lodash';
import { z } from 'zod';

const FormSchema = z.object({
  FullName: z.string().min(2),
  Email: z.string().email(),
  Phone: z.string().min(10),
  Coupon: z.string().optional(),
});

const StepInfo = () => {
  const { increment, decrement } = useStepper();
  const [formValues, setFormValues] = useState({
    FullName: '',
    Email: '',
    Phone: '',
    Coupon: '',
  });
  const form = Form.useFormInstance();

  const { FullName, Email, Phone } = formValues;

  const isValid = useMemo(() => {
    if (FullName && Email && Phone) {
      return FormSchema.safeParse(formValues);
    }
    return false;
  }, [FullName, Email, Phone, formValues]);

  return (
    <StepBody>
      <div className="grid-item">
        <InfoSection>
          <h3>Thông tin người đặt</h3>
          <ConfigProvider
            theme={{
              token: {
                colorText: '#fff',
                fontFamily: 'Be Vietnam Pro',
                paddingXS: 4,
              },
            }}
          >
            <Form
              layout="vertical"
              style={{ width: '100%', color: '#fff' }}
              onValuesChange={(_, values) => {
                if (values) {
                  setFormValues((prev) => ({ ...prev, ...values }));
                }
              }}
              form={form}
              name="ticketCustomerForm"
            >
              <Form.Item
                label="Họ và tên"
                name="FullName"
                className="form-item"
                required
              >
                <InputField
                  placeholder="Nhập họ và tên"
                  className="form-item"
                />
              </Form.Item>
              <Form.Item
                label="Email"
                name="Email"
                className="form-item"
                required
              >
                <InputField placeholder="Nhập email" className="form-item" />
              </Form.Item>
              <Form.Item
                label="Số điện thoại"
                name="Phone"
                className="form-item"
                required
              >
                <InputField
                  placeholder="Nhập số điện thoại"
                  className="form-item"
                />
              </Form.Item>
              <Form.Item
                label="Mã giảm giá"
                name="Coupon"
                className="form-item"
              >
                <InputField
                  placeholder="Nhập mã giảm giá"
                  className="form-item"
                />
              </Form.Item>
            </Form>
          </ConfigProvider>
          {!isValid && (
            <div style={{ color: 'red' }}>
              * Vui lòng điền đầy đủ và chính xác thông tin
            </div>
          )}
        </InfoSection>
        <BookingInfo />
        <ButtonGroup>
          <Button typeFill="text" onClick={decrement}>
            Trở về
          </Button>
          <Button onClick={increment} type="submit" disabled={!isValid}>
            Tiếp theo
          </Button>
        </ButtonGroup>
      </div>
    </StepBody>
  );
};

export default StepInfo;

const BookingInfo = () => {
  const booking = [
    {
      title: 'Ghế hạng Premium',
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
          <div className="booking-des" key={item.title}>
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

function numberWithCommas(x: number) {
  let s = x.toString();
  const pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(s)) s = s.replace(pattern, '$1.$2');
  return s;
}

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
  .form-item {
    width: 100%;
    margin-bottom: 12px;
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
    label {
      font-size: 12px !important;
    }
  }
`;
