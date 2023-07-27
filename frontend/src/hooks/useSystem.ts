import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import SystemSelector from '../store/selectors/system.selectors';
import * as Action from '../store/reducers/system.reducer';
import { RootState } from '../store/reducers';

type ParaFunction = (apiKeyArg: string) => void;

type UseSystemReturn = {
  apiKey: RootState['system']['apiKey'];
  setAPIKey: ParaFunction;
};

const useSystem = (): UseSystemReturn => {
  const dispatch = useAppDispatch();
  const apiKey = useAppSelector(SystemSelector.apiKey);

  const setAPIKey: ParaFunction = React.useCallback(
    (apiKey: string) => {
      dispatch(Action.setAPIKey(apiKey));
    },
    [dispatch],
  );
  return { apiKey, setAPIKey };
};

export default useSystem;
