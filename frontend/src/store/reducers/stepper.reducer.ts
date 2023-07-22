import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface StepperState {
  steps: string[];
  currentStep: number;
  customer: {
    name: string;
    email: string;
    phone: string;
    coupon: string;
  };
  // TODO: Migrate seatsState to seats Object
  seats: {
    premium: {
      quad: number;
      duo: number;
      single: number;
    };
    standard: {
      quad: number;
      duo: number;
      single: number;
    };
    eco: {
      quad: number;
      duo: number;
      single: number;
    };
    payment: {
      originalPrice: number;
      discount: {
        type: string;
        value: number;
      };
      actualPrice: number;
    };
  };
}

const initialState: StepperState = {
  steps: [],
  currentStep: 0,
  customer: {
    name: '',
    email: '',
    phone: '',
    coupon: '',
  },
  seats: {
    premium: {
      quad: 0,
      duo: 0,
      single: 0,
    },
    standard: {
      quad: 0,
      duo: 0,
      single: 0,
    },
    eco: {
      quad: 0,
      duo: 0,
      single: 0,
    },
    payment: {
      originalPrice: 0,
      discount: {
        type: '',
        value: 0,
      },
      actualPrice: 0,
    },
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
