export const hasSome = (array, term) =>
  array.some(item =>
    item
      .trim()
      .toLowerCase()
      .includes(term)
  );
