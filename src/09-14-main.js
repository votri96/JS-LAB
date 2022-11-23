function reduce(arr, callbackFn, initialValue) {
  if (!Array.isArray(arr) || typeof callbackFn != 'function') {
    console.log('Invalid parameters');
  }

  if (arr.length === 0) {
    if (initialValue === undefined) {
      console.log('Should have initialValue when arr is empty');
    }

    return initialValue;
  }

  const hasInitialValue = initialValue != undefined;
  const startIndex = hasInitialValue ? 0 : 1;
  let accumulator = hasInitialValue ? initialValue : arr[0];

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callbackFn(accumulator, arr[i], i);
  }

  return accumulator;
}

function calcSum(prevSum, number) {
  return prevSum + number;
}

console.log(reduce([2, 4, 6], calcSum, 0));

console.log(
  reduce(
    [2, 4, 6],
    function calcSum(prevSum, number) {
      return prevSum + number;
    },
    0
  )
);

console.log(reduce([2, 4, 6], (prevSum, number) => prevSum + number, 0));
