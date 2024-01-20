function solve(input, n) {
  let price = 0;
  switch (input) {
    case "coffee":
      price = 1.5;
      break;
    case "water":
      price = 1.0;
      break;
    case "coke":
      price = 1.4;
      break;
    case "snacks":
      price = 2.0;
      break;
  }

  let fullprice = price * n;
  console.log(fullprice.toFixed(2));
}
solve("water", 5);
