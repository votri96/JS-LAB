const numberList = [2, 4, 6];
for (let i = 0; i < numberList.length; i++) {
  const number = numberList[i];
  console.log(number); // 2, 4, 6
}

// ES5 forEach
const numberList = [2, 4, 6];
numberList.forEach((x) => console.log(x)); // 2, 4, 6
numberList.forEach((x, index) => {
  console.log(x);
  console.log(index);
}); // 2, 4, 6

// ES6 for...of
const numberList = [2, 4, 6];
for (const number of numberList) {
  console.log(number); // 2, 4, 6
}
