import { RootState } from 'store/reducers';

const counterSelector = (state: RootState) => state.counter;

const count = (state: RootState) => counterSelector(state).count;

const CounterSelector = { counterSelector, count };
export default CounterSelector;
