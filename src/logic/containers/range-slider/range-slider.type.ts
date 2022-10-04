import type { ActionCreatorWithPayload } from '@reduxjs/toolkit';

type TRangeSlider = {
  min: React.InputHTMLAttributes<Element>['min'];
  max: React.InputHTMLAttributes<Element>['max'];
  current: React.InputHTMLAttributes<Element>['value'];
  actionCreator: ActionCreatorWithPayload<any>;
};

export type { TRangeSlider };
