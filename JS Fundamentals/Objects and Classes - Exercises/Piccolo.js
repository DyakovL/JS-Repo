function solve(input) {
  const parking = [];
  for (const car of input) {
    let cmd = car.split(", ");
    let cmdType = cmd[0];
    let number = cmd[1];

    if (cmdType === "IN" && !parking.includes(number)) {
      parking.push(number);
    }

    if (cmdType === "OUT" && parking.includes(number)) {
      let index = parking.indexOf(number);
      parking.splice(index, 1);
    }
  }

  const sorted = parking.sort((a, b) => a.localeCompare(b));

  for (const car of parking) {
    console.log(car);
  }
}
solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
