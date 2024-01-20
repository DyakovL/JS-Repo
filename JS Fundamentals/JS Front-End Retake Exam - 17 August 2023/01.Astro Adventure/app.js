function solve(input) {
  const n = Number(input.shift());
  const data = input.splice(0, n);

  const astrounats = {};

  data.forEach((element) => {
    let item = element.split(" ");
    astrounats[item[0]] = [];
    let currPerson = {
      oxygen: Number(item[1]),
      energy: Number(item[2]),
    };
    astrounats[item[0]].push(currPerson);
  });

  while (input.length !== 0) {
    let currData = input.shift();

    if (currData === "End") {
      break;
    }

    let cmdArgs = currData.split(" - ");
    let cmd = cmdArgs[0];
    let name = cmdArgs[1];
    let amount = Number(cmdArgs[2]);

    switch (cmd) {
      case "Explore":
        if (astrounats[name][0].energy >= amount) {
          astrounats[name][0].energy -= amount;
          console.log(
            `${name} has successfully explored a new area and now has ${astrounats[name][0].energy} energy!`
          );
        } else {
          console.log(
            "{astronaut name} does not have enough energy to explore!"
          );
        }
        break;

      case "Refuel":
        let currEnergy = astrounats[name][0].energy;
        let fullAmountOfEnergy = currEnergy + amount;
        let recoveredAmountOfEnergy = 0;
        if (fullAmountOfEnergy >= 200) {
          astrounats[name][0].energy = 200;
          recoveredAmountOfEnergy = 200 - currEnergy;
        } else {
          astrounats[name][0].energy += amount;
          recoveredAmountOfEnergy = amount;
        }

        console.log(
          `${name} refueled their energy by ${recoveredAmountOfEnergy}!`
        );
        break;

      case "Breathe":
        let currOxygen = astrounats[name][0].oxygen;
        let fullAmount = currOxygen + amount;
        let recoveredAmount = 0;
        if (fullAmount >= 100) {
          astrounats[name][0].oxygen = 100;
          recoveredAmount = 100 - currOxygen;
        } else {
          astrounats[name][0].oxygen += amount;
          recoveredAmount = amount;
        }

        console.log(
          `${name} took a breath and recovered ${recoveredAmount} oxygen!`
        );
        break;
    }
  }

  for (const person in astrounats) {
    console.log(
      `Astronaut: ${person}, Oxygen: ${astrounats[person][0].oxygen}, Energy: ${astrounats[person][0].energy}`
    );
  }
}
solve([
  "3",
  "John 50 120",
  "Kate 80 180",
  "Rob 70 150",
  "Explore - John - 50",
  "Refuel - Kate - 30",
  "Breathe - Rob - 20",
  "End",
]);
