import type { FC } from 'react';
import { ScreenResComponent } from '../../components/screen-res';
import { useScreenDetails } from '../../hooks/screen-details';

const ScreenResContainer: FC = () => {
  const {
    screenResolutionDetails: {
      default: { w, h },
    },
  } = useScreenDetails();

  return <ScreenResComponent w={w} h={h} />;
};

export { ScreenResContainer };
