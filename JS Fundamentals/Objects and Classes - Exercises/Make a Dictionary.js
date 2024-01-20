function solve(input) {
  const dictionary = {};
  let data = [];
  for (const items of input) {
    let obj = JSON.parse(items);
    let term = Object.keys(obj)[0];
    let description = obj[term];
    dictionary[term] = description;
  }

  const sorted = Object.entries(dictionary);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));

  for (const [key, value] of sorted) {
    console.log(`Term: ${key} => Definition: ${value}`);
  }
}
solve([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
