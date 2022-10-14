import type { FC } from 'react';
import { PopupWithoutDimmerComponent } from '../../components/popup-without-dimmer';
import { PortalContainer } from '../portal';
import type { TPopupWithoutDimmer } from './popup-without-dimmer.type';

const PopupWithoutDimmerContainer: FC<TPopupWithoutDimmer> = ({ isOpened, children }) => (
  <PortalContainer>
    <PopupWithoutDimmerComponent isOpened={isOpened}>{children}</PopupWithoutDimmerComponent>
  </PortalContainer>
);
export { PopupWithoutDimmerContainer };
