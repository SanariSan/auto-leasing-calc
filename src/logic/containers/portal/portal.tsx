import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { TPortal } from './portal.type';

const PortalContainer: FC<TPortal> = ({ children }) => {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.append(container);

    return () => {
      container.remove();
    };
  }, [container]);

  return createPortal(children, container);
};

export { PortalContainer };
