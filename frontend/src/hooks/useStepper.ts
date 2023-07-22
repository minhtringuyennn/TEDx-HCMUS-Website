import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import StepperSelector from '../store/selectors/stepper.selectors';
import * as Action from '../store/reducers/stepper.reducer';
import { RootState } from '../store/reducers';

type ParaFunction = (arg: Array<string>) => void;

type SeatsFunction = (arg: {
  premium: number;
  standard: number;
  eco: number;
}) => void;

type CustomerFunction = (arg: {
  name: string;
  email: string;
  phone: string;
  coupon: string;
}) => void;

type SeatsStateFunction = (arg: {
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
}) => void;

type UseStepperReturn = {
  steps: RootState['stepper']['steps'];
  currentStep: RootState['stepper']['currentStep'];
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
  increment: VoidFunction;
  decrement: VoidFunction;
  setSteps: ParaFunction;
  setSeats: SeatsFunction;
  setCustomer: CustomerFunction;
  setSeatsState: SeatsStateFunction;
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
  const seats = useAppSelector(StepperSelector.seats);
  const customer = useAppSelector(StepperSelector.customer);
  const seatsState = useAppSelector(StepperSelector.seatsState);

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

  const setSeats: SeatsFunction = React.useCallback(
    (newSeats: { premium: number; standard: number; eco: number }) => {
      dispatch(Action.setSeats(newSeats));
    },
    [dispatch],
  );

  const setCustomer: CustomerFunction = React.useCallback(
    (newCustomer: {
      name: string;
      email: string;
      phone: string;
      coupon: string;
    }) => {
      dispatch(Action.setCustomer(newCustomer));
    },
    [dispatch],
  );

  const setSeatsState: SeatsStateFunction = React.useCallback(
    (newSeatsState: {
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
    }) => {
      dispatch(Action.setSeatsState(newSeatsState));
    },
    [dispatch],
  );

  return {
    steps,
    currentStep,
    seats,
    customer,
    seatsState,
    increment,
    decrement,
    setSteps,
    setSeats,
    setCustomer,
    setSeatsState,
  };
};

export default useStepper;
