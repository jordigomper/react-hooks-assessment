// return true if it finds the same item in the two arrays
export const hasSome = (array1, array2) => {
  return array1.some(element1 =>
    array2.some(element2 => {
      return element2.trim().toLowerCase() === element1.trim().toLowerCase();
    })
  );
};
