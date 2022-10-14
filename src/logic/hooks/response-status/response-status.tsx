import { useEffect, useState } from 'react';
import { sleep } from '../../../helpers/util';
import { setIdle, submitParamsSelector } from '../../store';
import { useAppDispatch, useAppSelector } from '../redux';

const useResponseStatus = () => {
  const { status, response, error } = useAppSelector(submitParamsSelector);
  const [shouldBeDisplayed, setShouldDisplayed] = useState(
    () => status === 'succeeded' || status === 'failed',
  );
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    setShouldDisplayed(status === 'succeeded' || status === 'failed');
  }, [status]);

  useEffect(() => {
    if (status === 'succeeded' || status === 'failed') {
      void sleep(1).then(() => dispatch(setIdle()));
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (status === 'succeeded' && response !== undefined) {
      setMessage(response.success ? 'Success' : JSON.stringify(response));
    } else if (status === 'failed' && error !== undefined) {
      setMessage(error === '' ? 'Error' : error);
    }
  }, [dispatch, status, setMessage, response, error]);

  return { status, message, shouldBeDisplayed };
};

export { useResponseStatus };
