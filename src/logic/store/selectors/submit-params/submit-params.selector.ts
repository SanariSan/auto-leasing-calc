import type { TRootState } from '../../store.type';

const submitParamsSelector = (state: TRootState) => state.submitParams;

export { submitParamsSelector };
