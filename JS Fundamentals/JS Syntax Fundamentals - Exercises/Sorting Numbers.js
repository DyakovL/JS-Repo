function solve(arr) {
  let newArr = [];
  let fullLengrth = arr.length;
  let num = 1;
  while (newArr.length != fullLengrth) {
    let minNum = 0;
    let maxNum = 0;
    if (num % 2 === 1) {
      minNum = Math.min(...arr);
      newArr.push(minNum);
      const index = arr.indexOf(minNum);
      arr.splice(index, 1);
      minNum = 0;
    }
    if (num % 2 === 0) {
      maxNum = Math.max(...arr);
      newArr.push(maxNum);
      const index = arr.indexOf(maxNum);
      arr.splice(index, 1);
      maxNum = 0;
    }

    num++;
  }
  return newArr;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
