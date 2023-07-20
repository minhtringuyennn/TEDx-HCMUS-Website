import * as React from 'react';
import { useStepper } from 'hooks';
import styled from 'styled-components';
import Button from 'components/Button';
import Modal from 'components/Modal/Modal';
import CinemaSeats from './CinemaSeats';
import TicketData from './ticketData.json';

function numberWithCommas(x: number) {
  let s = x.toString();
  const pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(s)) s = s.replace(pattern, '$1.$2');
  return s;
}

interface PriceProps {
  title: string;
  types: Array<{
    title: string;
    price: number;
  }>;
}

const TicketPrice = ({ title, types }: PriceProps) => (
  <TicketGroup>
    <div>{title}</div>
    {types.map((type) => (
      <div className="ticket-type" key={type.title}>
        <div className="ticket-type-title">{type.title}</div>
        <div className="ticket-type-price">{numberWithCommas(type.price)}</div>
      </div>
    ))}
  </TicketGroup>
);

const QuantityGroup = () => {
  const [quan, setQuanState] = React.useState(0);
  const increase = () => setQuanState(quan + 1);
  const decrease = () => setQuanState(quan === 0 ? 0 : quan - 1);
  return (
    <Quantity>
      <Button typeFill="outlined" onClick={decrease} className="quantity-btn">
        -
      </Button>
      <div className="quantity-number">{quan}</div>
      <Button typeFill="outlined" onClick={increase} className="quantity-btn">
        +
      </Button>
    </Quantity>
  );
};
const StepTicket = () => {
  const { increment } = useStepper();
  const [isModalOpen, setModalState] = React.useState(false);
  const toggleModal = () => setModalState(!isModalOpen);

  return (
    <StepBody>
      <div className="grid-left">
        <h3>Giá vé</h3>
        {Object.entries(TicketData).map(([title, value]) => (
          <div className="ticket-opt" key={value.title}>
            <div className="ticket-type-title">{value.title}</div>
            <QuantityGroup />
          </div>
        ))}
        <Button typeFill="text" onClick={toggleModal} className="more-info">
          <span
            style={{
              textDecoration: 'underline',
            }}
          >
            Chi tiết mức giá vé
          </span>
        </Button>
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          {Object.entries(TicketData).map(([title, value]) => (
            <TicketPrice
              title={value.title}
              types={value.types}
              key={value.title}
            />
          ))}
        </Modal>
        <ButtonGroup>
          <Button onClick={increment}>Tiếp theo</Button>
        </ButtonGroup>
      </div>
      <div className="grid-right">
        <h3>Sơ đồ chỗ ngồi</h3>
        <CinemaSeats />
      </div>
    </StepBody>
  );
};

export default StepTicket;

const StepBody = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  text-align: center;
  padding-bottom: 2rem;
  .more-info {
    font-style: italic;
    font-weight: normal;
    height: auto;
    width: auto;
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    &:hover {
      background: none;
      color: ${({ theme }) => theme.colors.primary.default};
    }
  }
  .grid-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    grid-column: 2/6;
    @media (max-width: ${({ theme }) => theme.size.md}) {
      grid-column: 1/7;
      gap: 12px;
    }
  }
  .grid-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    grid-column: 8/13;
    @media (max-width: ${({ theme }) => theme.size.md}) {
      grid-column: 7/13;
    }
  }
  .ticket-opt {
    display: flex;
    align-items: base-line;
    justify-content: space-between;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.size.lg}) {
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
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

const TicketGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding-bottom: 16px;
  .ticket-type {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }
  .ticket-type-title {
    color: ${({ theme }) => theme.colors.lightGray};
  }
  .ticket-type-price {
    color: ${({ theme }) => theme.colors.lightGray};
  }
  .ticket-group-divider {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.darkGray};
  }
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  .quantity-number {
    width: 32px;
  }
  .quantity-btn {
    color: ${({ theme }) => theme.colors.primary.default};
    background: none !important;
    height: 24px;
    width: 24px;
    padding: 0px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;
