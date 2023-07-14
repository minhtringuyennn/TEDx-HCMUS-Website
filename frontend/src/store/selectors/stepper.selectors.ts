import { RootState } from '../reducers';

const stepperSelector = (state: RootState) => state.stepper;

const steps = (state: RootState) => stepperSelector(state).steps;
const currentStep = (state: RootState) => stepperSelector(state).currentStep;

const StepperSelector = { stepperSelector, steps, currentStep };
export default StepperSelector;
