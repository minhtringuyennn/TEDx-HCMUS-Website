import { combineReducers } from '@reduxjs/toolkit';

import stepper from './stepper.reducer';
import system from './system.reducer';

const rootReducer = combineReducers({ stepper, system });
type RootState = ReturnType<typeof rootReducer>;

export type { RootState };
export default rootReducer;
