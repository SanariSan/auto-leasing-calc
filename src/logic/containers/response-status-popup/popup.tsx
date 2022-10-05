import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { PopupComponent } from '../../components/popup/popup';
import { useAppSelector } from '../../hooks/redux';
import { submitParamsSelector } from '../../store';

const ResponseStatusPopupContainer: FC = () => {
  const { status, response, error } = useAppSelector(submitParamsSelector);
  const [text, setText] = useState('');

  useEffect(() => {
    if (status === 'succeeded') {
      if (response !== undefined) {
        setText(response.success ? 'Success' : JSON.stringify(response));
      }
    } else if (status === 'failed') {
      if (error !== undefined) {
        setText(error === '' ? 'Error' : error);
      }
    } else {
      setText('');
    }
  }, [status, setText, response, error]);

  return <PopupComponent visible={status === 'succeeded' || status === 'failed'} text={text} />;
};

export { ResponseStatusPopupContainer };
