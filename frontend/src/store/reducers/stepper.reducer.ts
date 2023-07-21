import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface StepperState {
  steps: string[];
  currentStep: number;
  seats: {
    premium: number;
    standard: number;
    eco: number;
  };
  customer: {
    name: string;
    email: string;
    phone: string;
    coupon: string;
  };
}

const initialState: StepperState = {
  steps: [],
  currentStep: 0,
  seats: {
    premium: 0,
    standard: 0,
    eco: 0,
  },
  customer: {
    name: '',
    email: '',
    phone: '',
    coupon: '',
  },
};

const stepper = createSlice({
  name: 'stepper',
  initialState,
  reducers: {
    increment: (state) => ({
      ...state,
      currentStep:
        state.currentStep < state.steps.length - 1
          ? state.currentStep + 1
          : state.currentStep,
    }),
    decrement: (state) => ({
      ...state,
      currentStep:
        state.currentStep === 0 ? state.currentStep : state.currentStep - 1,
    }),
    setSteps: (state, action: PayloadAction<string[]>) => ({
      ...state,
      steps: action.payload,
    }),
    setSeats: (state, action: PayloadAction<StepperState['seats']>) => ({
      ...state,
      seats: action.payload,
    }),
    setCustomer: (state, action: PayloadAction<StepperState['customer']>) => ({
      ...state,
      customer: action.payload,
    }),
  },
});

export default stepper.reducer;
export const { increment, decrement, setSteps, setSeats, setCustomer } =
  stepper.actions;
