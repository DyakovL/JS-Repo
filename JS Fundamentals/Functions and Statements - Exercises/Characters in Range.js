function solve(par1, par2) {
  let valueOfCharOne = par1.charCodeAt(0);
  let valueOfCharTwo = par2.charCodeAt(0);
  let chare = [];
  if (valueOfCharOne < valueOfCharTwo) {
    for (let index = valueOfCharOne + 1; index < valueOfCharTwo; index++) {
      chare.push(String.fromCharCode(index));
    }
  } else {
    for (let index = valueOfCharTwo + 1; index < valueOfCharOne; index++) {
      chare.push(String.fromCharCode(index));
    }
  }

  console.log(chare.join(" "));
}
solve("C", "#");
