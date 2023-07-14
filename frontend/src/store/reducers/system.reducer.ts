import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface System {
  apiKey?: string;
}

const initialState: System = { apiKey: '' };

const system = createSlice({
  name: 'system',
  initialState,
  reducers: {
    setAPIKey: (state, action: PayloadAction<string>) => ({
      ...state,
      apiKey: action.payload,
    }),
  },
});

export default system.reducer;
export const { setAPIKey } = system.actions;
