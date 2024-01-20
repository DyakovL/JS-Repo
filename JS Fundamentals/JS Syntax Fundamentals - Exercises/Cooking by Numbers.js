function solve(...arr) {
  let number = arr[0];
  arr.shift();
  while (arr.length != 0) {
    let cmd = arr[0];
    if (cmd == "chop") {
      number /= 2;
    }
    if (cmd == "dice") {
      number = Math.sqrt(number);
    }
    if (cmd == "spice") {
      number += 1;
    }
    if (cmd == "bake") {
      number *= 3;
    }
    if (cmd == "fillet") {
      number *= 0.8;
    }

    console.log(number);
    arr.shift();
  }
}

solve("9", "dice", "spice", "chop", "bake", "fillet");
