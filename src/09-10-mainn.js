function map(arr, mappingFn) {
  if (!Array.isArray(arr) || typeof mappingFn != 'function') return undefined;

  const newArray = [];

  //mapping
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const newElement = mappingFn(element, i);
    newArray.push(newElement);
  }

  return newArray;
}

console.log(map([1, 2, 3], (x) => x + 1));

console.log(map([1, 2, 3], (x, idx) => (idx % 2 === 0 ? x + 1 : x * 2)));

const numberList = [1, 3, 5, 7];
numberList.map((x) => x + 1); // [2, 4, 6, 8]
numberList.map((x) => x * 2); // [ 2, 6, 10, 14]
