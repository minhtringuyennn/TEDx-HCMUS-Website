import { combineReducers } from '@reduxjs/toolkit';
import counter from './counter.reducer';

const rootReducer = combineReducers({ counter });
type RootState = ReturnType<typeof rootReducer>;

export type { RootState };
export default rootReducer;
