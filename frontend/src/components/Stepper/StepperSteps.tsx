import React, { HTMLProps, ReactNode, useEffect } from 'react';
import { useStepper } from 'hooks';

interface StepperStepsProps extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}
export const StepperSteps = ({ children, ...props }: StepperStepsProps) => {
  const { steps, currentStep, setSteps } = useStepper();

  useEffect(() => {
    const stepperSteps = React.Children.toArray(children).map(
      (step: React.ReactNode) => React.isValidElement(step) && step.props.name,
    );
    // const stepperSteps = ['Step 1', 'Step 2', 'Step 3'];
    // console.log(stepperSteps);
    setSteps(stepperSteps);
  }, [setSteps]);

  return (
    <div {...props}>
      {children &&
        React.Children.map(children, (child) => {
          if (steps.length) {
            return React.isValidElement(child) &&
              child.props.name === steps[currentStep]
              ? child
              : null;
          }
          return null;
        })}
    </div>
  );
};

export const StepperStep = ({ children }: StepperStepsProps) => <>{children}</>;
