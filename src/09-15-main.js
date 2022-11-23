function findMaxByReduce(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let max = numberList[0];

  // return numberList.reduce((max, number) => {
  //   if (number > max) return number;

  //   return max;
  // })

  // return numberList.reduce((max, number) => {
  //   return number > max ? number : max;
  // })

  return numberList.reduce((max, number) => (number > max ? number : max));
}
