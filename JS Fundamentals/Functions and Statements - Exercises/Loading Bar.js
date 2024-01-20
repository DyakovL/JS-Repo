function solve(n) {
  if (n === 100) {
    console.log(`100% Complete!`);
    return;
  }

  let string = "";
  for (let i = 0; i < 10; i++) {
    if (i < n / 10) {
      string += "%";
    }
    if (i >= n / 10) {
      string += ".";
    }
  }

  console.log(`${n}% [${string}]`);
  console.log(`Still loading...`);
}
solve(100);
