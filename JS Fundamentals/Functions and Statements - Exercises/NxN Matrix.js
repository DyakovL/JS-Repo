function solve(n) {
  let arr = [];

  for (let index = 0; index < n; index++) {
    arr.push([]);
  }
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      arr[row][col] = n;
    }
  }

  for (let i = 0; i < n; i++) {
    console.log(arr[i].join(" "));
  }
}
solve(3);
