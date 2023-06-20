import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import CounterSelector from 'store/selectors/counter.selectors';
import * as Action from 'store/reducers/counter.reducer';

type UseCounterReturn = {
  count: number;
  increment: VoidFunction;
  decrement: VoidFunction;
};
/**
 * An example for a custom hook that wraps a redux state selectors
 * and actions and provides a summary of the store usage
 * @returns count: number, increment: VoidFunction, decrement: VoidFunction
 */
const useCounter = (): UseCounterReturn => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(CounterSelector.count);

  const increment: VoidFunction = React.useCallback(() => {
    dispatch(Action.increment());
  }, [dispatch]);

  const decrement: VoidFunction = React.useCallback(() => {
    dispatch(Action.decrement());
  }, [dispatch]);

  return { count, increment, decrement };
};

export default useCounter;
