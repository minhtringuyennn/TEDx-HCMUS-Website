import React, { useEffect } from 'react';
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

function parseTitleTicket(x: string) {
  if (x === 'single') return 'Ghế đơn (x1 ghế)';
  if (x === 'duo') return 'Combo ghế đôi (x2 ghế)';
  return 'Combo ghế nhóm (x4 ghế)';
}

// Define the prop type for seatKey
type SeatKeyType = 'premium' | 'standard' | 'eco';

// Define the props interface for the QuantityGroup component
interface QuantityGroupProps {
  seatKey: SeatKeyType;
}

const QuantityGroup: React.FC<QuantityGroupProps> = ({ seatKey }) => {
  const { seats, setSeats } = useStepper();
  const [quan, setQuanState] = React.useState(
    seats[seatKey].quad * 4 + seats[seatKey].duo * 2 + seats[seatKey].single ||
      0,
  );
  const increase = () => setQuanState(quan + 1);
  const decrease = () => setQuanState(quan === 0 ? 0 : quan - 1);
  const seatsState = {
    premium: { ...seats.premium },
    standard: { ...seats.standard },
    eco: { ...seats.eco },
  };

  // Update the seats state when the quantity changes
  useEffect(() => {
    seatsState[seatKey].duo = Math.floor((quan % 4) / 2);
    seatsState[seatKey].quad = Math.floor(quan / 4);
    seatsState[seatKey].single = quan % 2;

    const result = Object.entries(seatsState)
      .map(([key, value]) => {
        const seatType = TicketData[key as SeatKeyType];

        const typePrice =
          value.quad * seatType.quad +
          value.duo * seatType.duo +
          value.single * seatType.single;

        return typePrice;
      })
      .reduce((a, b) => a + b, 0);
    setSeats({
      ...seats,
      [seatKey]: {
        quad: seatsState[seatKey].quad,
        duo: seatsState[seatKey].duo,
        single: seatsState[seatKey].single,
      },
      payment: {
        ...seats.payment,
        originalPrice: result,
        actualPrice: result,
      },
    });
  }, [quan, setSeats]);

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

const countNumSeat = (seat: any) => seat.single + seat.duo * 2 + seat.quad * 4;

const StepTicket = () => {
  const { seats, increment, setSeats } = useStepper();
  const [isModalOpen, setModalState] = React.useState(false);
  const toggleModal = () => setModalState(!isModalOpen);

  const isValid =
    countNumSeat(seats.premium) +
      countNumSeat(seats.standard) +
      countNumSeat(seats.eco) >
    0;

  return (
    <StepBody>
      <div className="grid-left">
        <h3>Giá vé</h3>
        {Object.entries(TicketData).map(([key, value]) => (
          <div className="ticket-opt">
            <div className="ticket-type-title">{`Ghế hạng ${key}`}</div>
            <QuantityGroup seatKey={key as SeatKeyType} />
          </div>
        ))}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <span>Tạm tính</span>
          <span>{numberWithCommas(seats.payment.originalPrice)}</span>
        </div>
        <Button typeFill="text" onClick={toggleModal} className="more-info">
          <span
            style={{
              textDecoration: 'underline',
            }}
          >
            Chi tiết quyền lợi và mức giá vé
          </span>
        </Button>
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          {Object.keys(TicketData).map((key) => (
            <TicketGroup>
              <div>{`Vé hạng ${key}`}</div>
              {Object.entries(TicketData[key as SeatKeyType]).map(
                ([key, value]) => (
                  <div className="ticket-type">
                    <div className="ticket-type-title">
                      {parseTitleTicket(key)}
                    </div>
                    <div className="ticket-type-price">
                      {numberWithCommas(value)}
                    </div>
                  </div>
                ),
              )}
            </TicketGroup>
          ))}
          <span>
            Mỗi vé sẽ được một phần quà gồm túi tote, lanyard, móc khoá và
            sticker.
          </span>
        </Modal>
        <ButtonGroup>
          <Button onClick={increment} disabled={!isValid}>
            Tiếp theo
          </Button>
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
  margin-bottom: 2rem;
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
