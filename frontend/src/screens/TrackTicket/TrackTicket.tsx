import styled from 'styled-components';
import Navbar from 'components/NavBar/NavBar';
import InputField from 'components/InputField';
import Button from 'components/Button/Button';

const TrackTicket = () => (
  <Styled>
    <section>
      <div className="track-title">
        <h2>Theo dõi đơn hàng</h2>
        <div className="track-id">
          <InputField
            type="text"
            label="Nhập mã đơn hàng"
            className="inp-id-ticket"
            style={{ width: '100%' }}
          />
          <Button className="btn-follow">Theo dõi</Button>
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
  .inp-id-ticket {
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
  .btn-follow {
    padding: 16px 0px;
    display: flex;
    width: 140px;
    justify-content: center;
    align-items: center;
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
    .btn-follow {
      width: 30%;
    }
  }
`;
