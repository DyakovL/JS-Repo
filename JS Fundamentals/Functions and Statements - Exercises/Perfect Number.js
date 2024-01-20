function solve(num) {
  let numberToDivide = num;
  let counter = 0;

  while (numberToDivide !== 1) {
    counter += Math.round(numberToDivide / 2);
    numberToDivide = Math.round(numberToDivide / 2);
  }

  if (counter === num) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}
solve(1236498);
