import type { ReactElement } from 'react';

type TRangeController = {
  min: number;
  max: number;
  textareaValue: string;
  sliderValue: number;
  onTextareaInput: (evt: React.FormEvent<HTMLTextAreaElement>) => void;
  onSliderInput: (evt: React.FormEvent<HTMLInputElement>) => void;
  hintTitle: string;
  hintRight?: ReactElement;
};

export type { TRangeController };
