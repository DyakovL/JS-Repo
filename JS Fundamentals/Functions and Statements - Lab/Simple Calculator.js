function solve(num1, num2, operator) {
  let answer = 0;
  switch (operator) {
    case "multiply":
      answer = num1 * num2;
      break;
    case "divide":
      answer = num1 / num2;
      break;
    case "add":
      answer = num1 + num2;
      break;
    case "subtract":
      answer = num1 - num2;
      break;
  }
  console.log(answer);
}
solve(5, 5, "multiply");
