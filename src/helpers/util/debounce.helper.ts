function debounceWrap<TArgs extends unknown[]>(func: (...args: TArgs) => void, timeout = 750) {
  let timer: NodeJS.Timeout;
  return (...args: TArgs) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

function debounceLeadingWrap<TArgs extends unknown[]>(
  func: (...args: TArgs) => void,
  timeout = 250,
) {
  let timer: NodeJS.Timeout | undefined;
  return (...args: TArgs) => {
    if (timer === undefined) {
      func(...args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
}

export { debounceWrap, debounceLeadingWrap };
