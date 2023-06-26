import * as React from 'react';
import styled from 'styled-components';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { Search, Ticket } from 'icons';

const CTAButton = () => {
  const [isModalOpen, setModalState] = React.useState(false);
  const toggleModal = () => setModalState(!isModalOpen);
  return (
    <Styled>
      <Button type="primary" handleOnClick={toggleModal}>
        {' '}
        Purchase Ticket
      </Button>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <div className="content">
          <h3>Đặt vé TEDx Talk 2023: inSanity</h3>
          <div className="cards-container">
            <button type="button" className="card">
              <Search className="option-icon" />
              <div className="option">
                <div className="option-title">Đã có vé</div>
                <div className="option-description">Tra cứu đơn hàng</div>
              </div>
            </button>
            <button type="button" className="card">
              <Ticket className="option-icon" />
              <div className="option">
                <div className="option-title">Chưa có vé</div>
                <div className="option-description">Đặt vé ngay</div>
              </div>
            </button>
          </div>
        </div>
      </Modal>
    </Styled>
  );
};

const Styled = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 100%;
  }
  .cards-container {
    display: flex;
    align-items: flex-start;
    gap: 40px;
    width: inherit;
  }
  .card {
    display: flex;
    width: 100%;
    overflow: hidden;
    padding: 20px 0px;
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.colors.gray};
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
    background: none;
    color: ${({ theme }) => theme.colors.lightGray};
    font-family: inherit;
    transition: 200ms ease-in-out;
    &:hover {
      cursor: pointer;
      border: 2px solid ${({ theme }) => theme.colors.primary.default};
      color: ${({ theme }) => theme.colors.primary.default};
    }
  }
  .option-icon {
    color: inherit;
  }
  .option {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
  .option-title {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textColor};
  }
  .option-description {
    color: ${({ theme }) => theme.colors.lightGray};
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    .content {
      gap: 1rem;
    }
    .cards-container {
      flex-direction: column;
      gap: 1rem;
    }
    .card {
      flex-direction: row;
      padding: 1rem;
      gap: 1rem;
      justify-content: start;
    }
    .option-icon {
      width: 3rem;
      height: 3rem;
    }
    .option {
      align-items: flex-start;
    }
  }
`;
export default CTAButton;
