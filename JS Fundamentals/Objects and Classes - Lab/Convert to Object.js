function solve(jsonStr) {
  let person = JSON.parse(jsonStr);

  let data = "";
  for (var key in person) {
    if (person.hasOwnProperty(key)) {
      data += key + ": " + person[key] + "\n";
    }
  }

  return data;
}
