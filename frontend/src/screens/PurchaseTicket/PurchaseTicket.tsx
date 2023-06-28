import styled from 'styled-components';
import Stepper from 'components/Stepper';
import Navbar from 'components/NavBar/NavBar';
import Button from 'components/Button/Button';
import { useStepper } from 'hooks';
import StepTicket from './components/StepTicket';
import StepInfo from './components/StepInfo';
import StepBilling from './components/StepBilling';

const PurchaseTicket = () => {
  const { increment, decrement } = useStepper();

  return (
    <Styled>
      <section>
        <Stepper>
          <Stepper.Steps>
            <Stepper.Step id="first" name="Chọn chỗ">
              <StepTicket />
            </Stepper.Step>
            <Stepper.Step id="second" name="Điền thông tin">
              <StepInfo />
            </Stepper.Step>
            <Stepper.Step id="third" name="Thanh toán">
              <StepBilling />
            </Stepper.Step>
          </Stepper.Steps>
        </Stepper>
      </section>
      <Navbar />
    </Styled>
  );
};

export default PurchaseTicket;

const Styled = styled.div`
  section {
    height: 100vh;
    padding: 5rem;
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    section {
      padding: 3rem 1rem;
    }
  }
`;
