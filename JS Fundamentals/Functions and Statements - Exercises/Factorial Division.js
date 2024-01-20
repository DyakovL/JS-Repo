function solve(f1, f2) {
  let outputF1 = f1;

  for (let i = f1 - 1; i > 0; i--) {
    outputF1 *= i;
  }
  let outputF2 = f2;
  for (let i = f2 - 1; i > 0; i--) {
    outputF2 *= i;
  }

  let output = outputF1 / outputF2;
  console.log(output.toFixed(2));
}
solve(6, 2);
