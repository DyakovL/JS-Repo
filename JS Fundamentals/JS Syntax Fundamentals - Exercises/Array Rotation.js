function solve(arr, num) {
  for (let index = 0; index < num; index++) {
    let itemToBack = arr.shift();
    arr.push(itemToBack);
  }
  console.log(arr.join(" "));
}
solve([51, 47, 32, 61, 21], 2);
