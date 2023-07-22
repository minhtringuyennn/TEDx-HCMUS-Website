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
  // TODO: Migrate seatsState to seats Object
  seatsState: {
    premium: {
      quadSeat: number;
      duoSeat: number;
      singleSeat: number;
    };
    standard: {
      quadSeat: number;
      duoSeat: number;
      singleSeat: number;
    };
    eco: {
      quadSeat: number;
      duoSeat: number;
      singleSeat: number;
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
  seatsState: {
    premium: {
      quadSeat: 0,
      duoSeat: 0,
      singleSeat: 0,
    },
    standard: {
      quadSeat: 0,
      duoSeat: 0,
      singleSeat: 0,
    },
    eco: {
      quadSeat: 0,
      duoSeat: 0,
      singleSeat: 0,
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
    setSeatsState: (
      state,
      action: PayloadAction<StepperState['seatsState']>,
    ) => ({
      ...state,
      seatsState: action.payload,
    }),
  },
});

export default stepper.reducer;
export const {
  increment,
  decrement,
  setSteps,
  setSeats,
  setCustomer,
  setSeatsState,
} = stepper.actions;
