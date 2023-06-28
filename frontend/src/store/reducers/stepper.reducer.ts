import React from 'react';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface StepperState {
  steps: String[];
  currentStep: number;
}

const initialState: StepperState = { steps: [], currentStep: 0 };

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
    setSteps: (state, action: PayloadAction<String[]>) => ({
      ...state,
      steps: action.payload,
    }),
  },
});

export default stepper.reducer;
export const { increment, decrement, setSteps } = stepper.actions;
