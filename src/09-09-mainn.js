// linh canh

// v1
function findFirstEven(numberList) {
  if (!Array.isArray(numberList)) return undefined;

  let firstEven;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    if (number % 2 === 0) {
      firstEven = number;
      break;
    }
  }

  return firstEven;
}

console.log(findFirstEven([1, 2, 4]));

// v2
function findFirstEven(numberList) {
  if (!Array.isArray(numberList)) return undefined;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    if (number % 2 === 0) {
      return number;
    }
  }

  return undefined;
}

console.log(findFirstEven([1, 2, 4]));

// v3
function findFirstEven(numberList, callbackFn) {
  if (!Array.isArray(numberList)) return undefined;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    if (callbackFn(number)) {
      return number;
    }
  }

  return undefined;
}

function isEven(number) {
  return number % 2 === 0;
}

console.log(findFirstEven([1, 2, 4], isEven));

// inline function
// anonymous function
console.log(
  findFirstEven([1, 2, 4], function (number) {
    return number % 2 === 0;
  })
);

// arrow function
console.log(
  findFirstEven([1, 2, 3], (number) => {
    return number % 2 == 0;
  })
);

// arrow funtion shorthand

console.log(findFirstEven([1, 2, 3], (number) => number % 2 === 0));
