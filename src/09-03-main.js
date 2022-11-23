const numberList = [3, 5, 7];
// old way
const first = numberList[0]; // 3
const second = numberList[1]; // 5
const third = numberList[2]; // 7
// similar but new way
const [first, second, third] = numberList;
// or even direct array
const [first, second, third] = [3, 5, 7, 9, 11];
// rest operator (...)
const [first, second, third, ...rest] = [3, 5, 7, 9, 11];
console.log(rest); // [9, 11]
