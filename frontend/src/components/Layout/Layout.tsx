import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Modal from 'components/Modal/Modal';

/**
 * This component contains the main layout of the app
 * @returns React.ReactNode
 */
const Layout = () => {
  const [isModalOpen, setModalState] = useState(true);
  const toggleModal = () => setModalState(!isModalOpen);
  return (
    <Main>
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        style={{ maxWidth: '400px' }}
      >
        <div style={{ color: 'white' }}>
          Website trong quá trình hoàn thiện, các thanh toán có thể không được
          ghi nhận, bạn chưa nên đặt vé qua trang này
        </div>
      </Modal>
      <Outlet />
    </Main>
  );
};

export const Main = styled.main.attrs({ className: 'main' })`
  text-align: center;
  background-color: #000;
  color: white;
  height: inherit;
  max-height: 1440px;
`;

export default Layout;
