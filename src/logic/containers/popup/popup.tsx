import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { PopupComponent } from '../../components/popup/popup';
import { useAppSelector } from '../../hooks/redux';
import { submitParamsSelector } from '../../store';

const PopupContainer: FC = () => {
  const { status, response, error } = useAppSelector(submitParamsSelector);
  const [text, setText] = useState('');

  useEffect(() => {
    if (status === 'succeeded') {
      setText(response === '' ? 'OK' : JSON.stringify(response));
    } else if (status === 'failed') {
      setText(error === '' ? 'Error' : JSON.stringify(error));
    } else {
      setText('');
    }
  }, [status, setText, response, error]);

  return <PopupComponent visible={status === 'succeeded' || status === 'failed'} text={text} />;
};

export { PopupContainer };
