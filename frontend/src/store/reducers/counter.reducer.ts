import { createSlice } from '@reduxjs/toolkit';

interface CountState {
  count: number;
}

const initialState: CountState = { count: 0 };

const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => ({ ...state, count: state.count + 1 }),
    decrement: (state) => ({ ...state, count: state.count - 1 }),
  },
});

export default counter.reducer;
export const { increment, decrement } = counter.actions;
