type TRangeInput = {
  textareaValue: string;
  hint?: string;
  onTextareaInput: (evt: React.FormEvent<HTMLTextAreaElement>) => void;
  styleInject?: Record<string, unknown>;
};

export type { TRangeInput };
