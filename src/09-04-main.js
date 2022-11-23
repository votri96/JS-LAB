const numberList = [1, 2, 3];
const anotherList = [...numberList, 4, 5, 6];
anotherList[0] = 4; // anotherList = [4, 2, 3, 4, 5, 6]
console.log(numberList); // [1, 2, 3]
