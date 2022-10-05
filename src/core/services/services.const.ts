const DEFAULT_FETCH_HEADERS = {
  // 'Access-Control-Allow-Origin': '*',
  // 'Access-Control-Allow-Methods': '*',
  // 'Access-Control-Allow-Headers': '*',
  // 'Access-Control-Expose-Headers': 'Content-Length',
};

const DEFAULT_FETCH_OPTIONS: {
  method: string;
  redirect?: 'manual' | 'error' | 'follow';
} = {
  method: 'GET',
  redirect: 'manual',
};

export { DEFAULT_FETCH_HEADERS, DEFAULT_FETCH_OPTIONS };
