import type { FC } from 'react';
import { PopupWithDimmerComponent } from '../../components/popup-with-dimmer';
import { PortalContainer } from '../portal';
import type { TPopupWithDimmer } from './popup-with-dimmer.type';

const PopupWithDimmerContainer: FC<TPopupWithDimmer> = ({ isOpened, onClose, children }) => (
  <PortalContainer>
    <PopupWithDimmerComponent isOpened={isOpened} onClose={onClose}>
      {children}
    </PopupWithDimmerComponent>
  </PortalContainer>
);
export { PopupWithDimmerContainer };
