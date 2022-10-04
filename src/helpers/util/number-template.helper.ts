const template = ({ value }: { value: string }) =>
  [...value]
    .reverse()
    .flatMap((el, idx) => (idx !== 0 && idx % 3 === 0 ? [' ', el] : el))
    .reverse()
    .join('');

const deTemplate = ({ value }: { value: string }) => value.replaceAll(' ', '');

export { template, deTemplate };
