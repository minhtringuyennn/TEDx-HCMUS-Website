import React from 'react';
import { Quit } from 'icons';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const outsideRef = React.useRef(null);

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <CustomModal>
      <div
        ref={outsideRef}
        className="modal-overlay"
        onClick={handleCloseOnOverlay}
        role="presentation"
      />
      <div className="modal-box">
        <button type="button" className="quit-button" onClick={onClose}>
          <Quit style={{ width: '100%', height: '100%' }} />
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </CustomModal>
  ) : null;
};

const CustomModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
  }
  .modal-box {
    position: relative;
    width: 50%;
    background: var(--foundation-black-black-400, #333);
    display: inline-flex;
    overflow: hidden;
    padding: 1rem;
    border-radius: 1rem;
    flex-direction: column;
    align-items: center;
    animation: animatebottom 0.4s;
  }
  .modal-content {
    padding: 1rem;
    width: 100%;
  }
  .quit-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    height: 1.5rem;
    width: 1.5rem;
    border: none;
    padding: 4px;
    outline: none;
    cursor: pointer;
    &:focus-visible {
      outline: none;
    }
  }
  @keyframes animatebottom {
    0% {
      bottom: -300px;
      opacity: 0;
    }
    100% {
      bottom: 0px;
      opacity: 1;
    }
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    .quit-button {
      height: 1rem;
      width: 1rem;
      padding: 2px;
    }
    .modal-box {
      width: 100%;
      margin: 1rem;
      border-radius: 0.5rem;
    }
    .modal-content {
      padding: 1.25rem 0 0 0;
    }
  }
`;
export default Modal;
