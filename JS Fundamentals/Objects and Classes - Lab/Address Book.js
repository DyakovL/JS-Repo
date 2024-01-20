function solve(input) {
  let addressBook = {};
  for (const key of input) {
    let tokens = key.split(":");
    let name = tokens[0];
    let address = tokens[1];

    if (addressBook.hasOwnProperty(name)) {
      addressBook[name] = address;
    } else {
      addressBook[name] = address;
    }
  }

  let sorted = Object.entries(addressBook);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));

  for (const [key, value] of sorted) {
    console.log(`${key} -> ${value}`);
  }
}
solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
