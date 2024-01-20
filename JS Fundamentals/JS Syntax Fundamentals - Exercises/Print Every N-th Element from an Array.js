function solve(arr, num) {
  let newArr = [];

  for (let index = 0; index < arr.length; index++) {
    if (index % num == 0) {
      newArr.push(arr[index]);
    }
  }

  return newArr;
}
solve(["dsa", "asd", "test", "tset"], 2);
