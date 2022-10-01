export type TRangeSlider = {
  min: React.InputHTMLAttributes<Element>['min'];
  max: React.InputHTMLAttributes<Element>['max'];
  value: React.InputHTMLAttributes<Element>['value'];
  onSliderInput: (evt: React.FormEvent<HTMLInputElement>) => void;
};
