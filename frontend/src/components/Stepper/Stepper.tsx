import React from 'react';
import styled from 'styled-components';
import { useStepper } from 'hooks';
import { StepperStep, StepperSteps } from './StepperSteps';

interface StepperProps {
  children: React.ReactNode;
}
const Stepper = ({ children }: StepperProps) => {
  const { steps, currentStep } = useStepper();
  return (
    <StyledStepperContainer>
      <StyledStepperHeader>
        {steps.length
          ? steps.map((step, index) => (
              <StyledStepperHeaderItem
                className={currentStep >= index ? 'completed' : ''}
              >
                <div className="step-info">
                  <div
                    className={
                      currentStep >= index
                        ? 'step-connector  step-connector-completed'
                        : 'step-connector'
                    }
                  />
                  <div className="step-counter" />
                  <div
                    className={
                      currentStep > index
                        ? 'step-connector  step-connector-completed'
                        : 'step-connector'
                    }
                  />
                </div>
                <div className="step-name">{step}</div>
              </StyledStepperHeaderItem>
            ))
          : null}
      </StyledStepperHeader>
      <div>{children}</div>
    </StyledStepperContainer>
  );
};

Stepper.Step = StepperStep;
Stepper.Steps = StepperSteps;

const StyledStepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    margin-top: 20px;
  }
`;

export const StyledStepperHeaderItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  .step-counter {
    position: relative;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 50%;
    background: black;
    border: 2px solid #fff;
  }
  .step-info {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    margin-bottom: 6px;
  }

  .step-connector {
    border-bottom: 2px solid #fff;
    width: 100%;
  }
  .step-connector-completed {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary.default};
  }
  &:first-child {
    .step-info .step-connector {
      &:first-child {
        opacity: 0;
      }
    }
  }
  &:last-child {
    .step-info .step-connector {
      &:last-child {
        opacity: 0;
      }
    }
  }
  &.completed {
    .step-counter {
      background-color: ${({ theme }) => theme.colors.primary.default};
      border: 2px solid ${({ theme }) => theme.colors.primary.default};
    }
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    .step-counter {
      padding: 6px;
    }
    .step-connector {
      border-bottom: 1px solid #fff;
    }
    .step-connector-completed {
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary.default};
    }
  }
`;

export const StyledStepperHeader = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export default Stepper;
