/* eslint-disable @typescript-eslint/naming-convention */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'production' | 'development';
      REACT_APP_URL_PATH: string;
    }
  }
}

export {};
