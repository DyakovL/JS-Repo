function solve(num) {
  let numToString = num.toString();

  var isTrue = true;
  let sum = 0;

  for (let index = 0; index < numToString.length; index++) {
    if (index !== numToString.length - 1) {
      if (numToString[index] !== numToString[index + 1]) {
        isTrue = false;
      }
    }
    sum += parseInt(numToString[index]);
  }

  if (isTrue == false) {
    console.log("false");
    console.log(sum);
    XMLDocument;
  } else {
    console.log("true");
    console.log(sum);
  }
}
solve(2222222);
