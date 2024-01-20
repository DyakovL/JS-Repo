function solve(str) {
  let arr = str.split("");
  let numCounter = 0;
  let charCounter = 0;
  let bool = true;
  arr.forEach((element) => {
    const charCode = element.charCodeAt(0);
    if (!isNaN(parseInt(element))) {
      numCounter++;
    }

    if (
      !(charCode >= 65 && charCode <= 90) &&
      !(charCode >= 97 && charCode <= 122) &&
      !(charCode >= 48 && charCode <= 57)
    ) {
      charCounter++;
    }
  });

  if (str.length < 6 || str.length > 10) {
    bool = false;
    console.log("Password must be between 6 and 10 characters");
  }
  if (charCounter > 0) {
    bool = false;
    console.log("Password must consist only of letters and digits");
  }
  if (numCounter < 2) {
    bool = false;
    console.log("Password must have at least 2 digits");
  }

  if (bool === true) {
    console.log("Password is valid");
  }
}
solve("Pa$s$s");
