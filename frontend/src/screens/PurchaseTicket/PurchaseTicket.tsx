import styled from 'styled-components';
import Stepper from 'components/Stepper';
import Navbar from 'components/NavBar/NavBar';
import Button from 'components/Button/Button';
import { useStepper } from 'hooks';
import StepSeat from './components/StepSeat';
import StepCustomer from './components/StepCustomer';
import StepBilling from './components/StepBilling';

const PurchaseTicket = () => (
  <Styled>
    <section>
      <Stepper>
        <Stepper.Steps>
          <Stepper.Step id="first" name="Chọn chỗ">
            <StepSeat />
          </Stepper.Step>
          <Stepper.Step id="second" name="Điền thông tin">
            <StepCustomer />
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
