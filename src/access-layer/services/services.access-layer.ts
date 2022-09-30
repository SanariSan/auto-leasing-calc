import type { IRequestOptions } from '../../core/services';
import { request } from '../../core/services';

type TIRequestOptionsMethodPredefined = Omit<IRequestOptions, 'method'>;

const Request = {
  get: (args: TIRequestOptionsMethodPredefined) => request({ method: 'GET', ...args }),
  post: (args: TIRequestOptionsMethodPredefined) => request({ method: 'POST', ...args }),
  put: (args: TIRequestOptionsMethodPredefined) => request({ method: 'PUT', ...args }),
  delete: (args: TIRequestOptionsMethodPredefined) => request({ method: 'DELETE', ...args }),
};

export { Request };
