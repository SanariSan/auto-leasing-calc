import type { TLocalStorageKey } from './local-storage.helper.type';

const setLSValue = (key: TLocalStorageKey, value: unknown): void => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const delLSValue = (key: TLocalStorageKey): void => {
  window.localStorage.removeItem(key);
};

const getLSValue = (key: TLocalStorageKey): string | Record<string, unknown> | undefined => {
  const item = window.localStorage.getItem(key);

  if (item !== null) {
    try {
      return JSON.parse(item) as Record<string, unknown>;
    } catch {
      // delete malformed value and proceed to return undefined as if there is no value
      delLSValue(key);
    }
  }

  return undefined;
};

export { getLSValue, setLSValue, delLSValue };
