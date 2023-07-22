import { RootState } from '../reducers';

const stepperSelector = (state: RootState) => state.stepper;

const steps = (state: RootState) => stepperSelector(state).steps;
const currentStep = (state: RootState) => stepperSelector(state).currentStep;
const seats = (state: RootState) => stepperSelector(state).seats;
const customer = (state: RootState) => stepperSelector(state).customer;

const StepperSelector = {
  stepperSelector,
  steps,
  currentStep,
  seats,
  customer,
};
export default StepperSelector;
