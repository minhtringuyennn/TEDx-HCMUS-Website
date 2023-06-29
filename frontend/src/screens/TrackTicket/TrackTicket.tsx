import styled from 'styled-components';
import Navbar from 'components/NavBar/NavBar';
import InputField from 'components/InputField';
import Button from 'components/Button/Button';
import { Form, Space } from 'antd';

const onFinish = (values: any) => {
  console.log(values);
};
const TrackTicket = () => (
  <Styled>
    <section>
      <div className="track-title">
        <h2>Theo dõi đơn hàng</h2>
        <div className="track-id">
          <Form className="form-width" onFinish={onFinish}>
            <Form.Item className="form-width" name="booking-id">
              <Space.Compact className="form-width">
                <InputField placeholder="Nhập mã đơn hàng" />
                <Button type="submit" style={{ minWidth: 'fit-content' }}>
                  Theo dõi
                </Button>
              </Space.Compact>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
    <Navbar />
  </Styled>
);

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
