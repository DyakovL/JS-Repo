function solve([arr1], ...arr2) {
  let splitArr = arr1.split(", ");
  let splitArr2 = arr2.join(" ").split(" ");
  let word = splitArr[0];

  for (let i = 0; i < splitArr2.length; i++) {
    if (splitArr2[i] === "*" && splitArr2[i].length == word.legth) {
      splitArr2[i] = word;
    }
  }
  return splitArr2.join(" ");
}
solve("great", "softuni is ***** place for learning new programming languages");
