import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import StepperSelector from 'store/selectors/stepper.selectors';
import * as Action from 'store/reducers/stepper.reducer';
import { RootState } from 'store/reducers';

type ParaFunction = (a: Array<string>) => void;
type UseStepperReturn = {
  steps: RootState['stepper']['steps'];
  currentStep: RootState['stepper']['currentStep'];
  increment: VoidFunction;
  decrement: VoidFunction;
  setSteps: ParaFunction;
};
/**
 * An example for a custom hook that wraps a redux state selectors
 * and actions and provides a summary of the store usage
 * @returns steps: array of string, currentStep: number, increment: VoidFunction, decrement: VoidFunction, setSteps: VoidFunction
 */
const useStepper = (): UseStepperReturn => {
  const dispatch = useAppDispatch();
  const steps = useAppSelector(StepperSelector.steps);
  const currentStep = useAppSelector(StepperSelector.currentStep);

  const increment: VoidFunction = React.useCallback(() => {
    dispatch(Action.increment());
  }, [dispatch]);

  const decrement: VoidFunction = React.useCallback(() => {
    dispatch(Action.decrement());
  }, [dispatch]);

  const setSteps: ParaFunction = React.useCallback(
    (newSteps: Array<string>) => {
      dispatch(Action.setSteps(newSteps));
    },
    [dispatch],
  );
  return { steps, currentStep, increment, decrement, setSteps };
};

export default useStepper;
