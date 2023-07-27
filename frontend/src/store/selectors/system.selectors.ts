import { RootState } from '../reducers';

const systemSelector = (state: RootState) => state.system;

const apiKey = (state: RootState) => systemSelector(state).apiKey;

const SystemSelector = { systemSelector, apiKey };
export default SystemSelector;
