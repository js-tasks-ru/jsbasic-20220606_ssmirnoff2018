function getMinMax(str) {
  let numberArr = str
  .split(' ')
  .filter(element => !isNaN(element))
  .map(element => Number(element));

  numberArr.sort((a, b) => a - b);

  return {
   min: numberArr[0],
   max: numberArr[numberArr.length - 1],
}
}
