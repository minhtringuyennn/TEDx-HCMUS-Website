import { combineReducers } from '@reduxjs/toolkit';
import counter from './counter.reducer';
import stepper from './stepper.reducer';

const rootReducer = combineReducers({ counter, stepper });
type RootState = ReturnType<typeof rootReducer>;

export type { RootState };
export default rootReducer;
