type TRangeInput = {
  textareaValue: string;
  onTextareaInput: (evt: React.FormEvent<HTMLTextAreaElement>) => void;
  onTextareaFocus: (evt: React.FormEvent<HTMLTextAreaElement>) => void;
  onTextareaBlur: (evt: React.FormEvent<HTMLTextAreaElement>) => void;
  type?: 'default' | 'overlay';
};

export type { TRangeInput };
