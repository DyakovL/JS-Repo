function solve(par1, par2, par3) {
  let negatives = 0;
  if (par1 < 0) {
    negatives++;
  }
  if (par2 < 0) {
    negatives++;
  }
  if (par3 < 0) {
    negatives++;
  }

  if (negatives % 2 == 0) {
    console.log("Positive");
  }
  if (negatives % 2 == 1) {
    console.log("Negative");
  }
}
solve(-6, -12, 14);
