function solve(arr) {
  arr.forEach((num) => {
    let checkNum = num.toString();
    let reversedNum = checkNum.split("").reverse().join("");
    if (checkNum === reversedNum) {
      console.log("true");
    } else {
      console.log("false");
    }
  });
}
solve([32, 2, 232, 1010]);
