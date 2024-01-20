function solve(input) {
  let meetings = {};
  for (const key of input) {
    let tokens = key.split(" ");
    let day = tokens[0];
    let name = tokens[1];
    if (meetings.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      meetings[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }

  for (const key of Object.keys(meetings)) {
    console.log(`${key} -> ${meetings[key]}`);
  }
}
solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
