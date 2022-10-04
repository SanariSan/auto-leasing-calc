import { GenericError } from '../../../../core/error';

class ThunkError extends GenericError {
  public name: string;

  public description: string;

  public miscellaneous?: Record<string, unknown>;

  constructor(message: string, miscellaneous?: Record<string, unknown>) {
    super(message);

    this.name = 'ThunkError';
    this.description = 'Thunk related error';
    this.miscellaneous = miscellaneous;
  }
}

export { ThunkError };
