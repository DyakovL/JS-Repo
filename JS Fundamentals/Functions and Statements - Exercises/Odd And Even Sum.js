function solve(num) {
  let odd = 0;
  let even = 0;
  let digits = num.toString().split("");
  digits.forEach((element) => {
    let currElement = parseInt(element);
    if (currElement % 2 == 0) {
      even += currElement;
    }
    if (currElement % 2 == 1) {
      odd += currElement;
    }
  });

  console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
solve(1000435);
