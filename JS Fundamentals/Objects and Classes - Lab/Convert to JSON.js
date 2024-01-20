function solve(name, lastName, hairColor) {
  let person = {
    name: name,
    lastName: lastName,
    hairColor: hairColor,
  };

  let jsonStr = JSON.stringify(person);
  return jsonStr;
}
