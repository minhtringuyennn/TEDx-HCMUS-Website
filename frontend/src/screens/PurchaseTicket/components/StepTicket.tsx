import { useStepper } from 'hooks';
import Button from 'components/Button';
import styled from 'styled-components';
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
      <div className="ticket-type">
        <div className="ticket-type-title">{type.title}</div>
        <div className="ticket-type-price">{numberWithCommas(type.price)}</div>
      </div>
    ))}
    <div className="ticket-group-divider" />
  </TicketGroup>
);

const StepTicket = () => {
  const { increment } = useStepper();
  return (
    <StepBody>
      <div className="grid-left">
        <h3>Giá vé</h3>
        {Object.entries(TicketData).map(([title, value]) => (
          <TicketPrice title={value.title} types={value.types} />
        ))}
        <ButtonGroup>
          <Button disabled>Trở về</Button>
          <Button onClick={increment}>Tiếp theo</Button>
        </ButtonGroup>
      </div>
      <div className="grid-right">
        <h2>Sơ đồ chỗ ngồi</h2>
      </div>
    </StepBody>
  );
};

export default StepTicket;

const StepBody = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  text-align: center;
  .grid-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    grid-column: 2/6;
  }
  .grid-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    grid-column: 8/13;
  }
  @media (max-width: ${({ theme }) => theme.size.md}) {
    .grid-left {
      grid-column: 1/7;
    }
    .grid-right {
      grid-column: 8/13;
    }
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    .grid-left {
      gap: 8px;
    }
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
const TicketGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
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
